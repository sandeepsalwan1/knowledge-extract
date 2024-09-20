from unittest.mock import Base
from dotenv import load_dotenv
from fastapi import FastAPI

from vocode.logging import configure_pretty_logging
from vocode.streaming.agent.chat_gpt_agent import ChatGPTAgent
from prompts import BLOG_GENERATER, INTERVIEWER_PROMPT, INTERVIEWER_INITIAL_MESSAGE
from conversation_custom import ConversationRouter
from vocode.streaming.models.agent import ChatGPTAgentConfig
from vocode.streaming.models.message import BaseMessage
from vocode.streaming.models.synthesizer import AzureSynthesizerConfig
from vocode.streaming.synthesizer.azure_synthesizer import AzureSynthesizer
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from openai import OpenAI

load_dotenv()
client = OpenAI()
app = FastAPI(docs_url=None)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)
configure_pretty_logging()

conversation_router = ConversationRouter(
    agent_thunk=lambda: ChatGPTAgent(
        ChatGPTAgentConfig(
            model_name="gpt-4o",
            initial_message=BaseMessage(text=INTERVIEWER_INITIAL_MESSAGE),
            prompt_preamble=INTERVIEWER_PROMPT,
        )
    ),
    synthesizer_thunk=lambda output_audio_config: AzureSynthesizer(
        AzureSynthesizerConfig.from_output_audio_config(
            output_audio_config, voice_name="en-US-SteffanNeural"
        )
    ),
)

app.include_router(conversation_router.get_router())


class Message(BaseModel):
    role: str
    content: str

class Conversation(BaseModel):
    conversation: list[Message]

@app.post("/process_transcript")
def process_transcript(conversation: Conversation):
    markdown_post = summarize_conversation(conversation)
        

    return {"status": "success", "article": markdown_post}



def summarize_conversation(conversation: Conversation):
    output = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": BLOG_GENERATER},
            {"role": "user", "content": conversation.model_dump_json()}
        ]
    )
    draft_blog_post = output.choices[0].message.content
    return draft_blog_post

 

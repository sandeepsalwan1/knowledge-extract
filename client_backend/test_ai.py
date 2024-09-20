


from main import Conversation, Message, summarize_conversation


def test_summarize_conversation():
    mock_messages = [
        Message(role="user", content="Hello, how are you?"),
        Message(role="assistant", content="I'm doing well, thank you for asking. How can I assist you today?"),
        Message(role="user", content="I'd like to know more about machine learning."),
        Message(role="assistant", content="Certainly! Machine learning is a branch of artificial intelligence that focuses on building systems that can learn from and make decisions based on data. It's used in various applications such as image recognition, natural language processing, and predictive analytics. Would you like me to elaborate on any specific aspect of machine learning?"),
        Message(role="user", content="Can you give me an example of a real-world application?"),
        Message(role="assistant", content="Of course! One common real-world application of machine learning is in recommendation systems. For example, streaming services like Netflix use machine learning algorithms to analyze your viewing history and preferences to suggest movies and TV shows you might enjoy. These systems continuously learn from user behavior to improve their recommendations over time.")
    ]

    # Create a mock Conversation object
    mock_conversation = Conversation(conversation=mock_messages)
    
    output = summarize_conversation(mock_conversation)
    print(output.choices[0].message.content)


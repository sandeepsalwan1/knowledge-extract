import React, { useState, useEffect } from 'react';
import { useConversation } from 'vocode';
import ReactMarkdown from 'react-markdown';

function jsonizeTranscript(transcripts) {
  return transcripts.map((t) => ({
    "role": t.sender,
    "content": t.text,
  }));
}

const ConversationComponent = () => {
  const [processedResult, setProcessedResult] = useState('');
  const { status, start, stop, error, transcripts } = useConversation({
    backendUrl: "ws://localhost:3000/conversation",
    audioDeviceConfig: {},
    subscribeTranscript: true,
  });

  const processTranscript = async (t) => {
    console.log("Processing transcript:", t);
    const messages = jsonizeTranscript(t);
    try {
      const response = await fetch('http://localhost:3000/process_transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversation: messages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Transcript processed successfully:', result);
      
      if (result.article) {
        setProcessedResult(result.article);
      } else {
        console.warn('No markdown content received from server');
        setProcessedResult('No markdown content received');
      }

    } catch (error) {
      console.error('Error processing transcript:', error);
      setProcessedResult('Error processing transcript');
    }
  };

  useEffect(() => {
    if (status === "idle" && transcripts.length > 0) {
      console.log("Conversation completed, processing transcript");
      processTranscript(transcripts);
    }
  }, [status, transcripts]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#2D3748',
      color: 'white'
    }}>
      <h1 style={{ textAlign: 'center', padding: '20px 0' }}>Get Asked by SocraticAI!</h1>
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {processedResult && (
          <div style={{ 
            flex: 1, 
            padding: '20px', 
            overflowY: 'auto', 
            borderRight: '1px solid #4A5568'
          }}>
            <h2>Processed Result:</h2>
            <ReactMarkdown>{processedResult}</ReactMarkdown>
          </div>
        )}
        <div style={{ 
          flex: processedResult ? 1 : 2,
          padding: '20px', 
          display: 'flex', 
          flexDirection: 'column',
          overflowY: 'auto'
        }}>
          <p>Status: {status}</p>
          {status === "idle" && transcripts.length === 0 && <p>Press Start to talk!</p>}
          {status === "error" && error && <p>Error: {error.message}</p>}
          
          <button
            style={{
              padding: '10px 20px',
              margin: '10px 0',
              backgroundColor: '#4299E1',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            disabled={["connecting"].includes(status)}
            onClick={status === "connected" ? stop : start}
          >
            {status === "connected" ? "Stop" : "Start"}
          </button>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0, 
            flex: 1, 
            overflowY: 'auto' 
          }}>
            {transcripts.map((transcript, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{transcript.sender}:</strong> {transcript.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConversationComponent;

import React, { useState } from 'react';
import axios from 'axios';
import ChatWindow from './ChatWindow';
import UserInput from './UserInput';

const ChatbotApp = () => {
  const [chats, setChats] = useState([]);

  const handleSend = async (message) => {
    setChats([...chats, { type: 'user', message }]);

    try {
      const res = await axios.post('http://localhost:5000/api/chatbot/query', { query: message });
      setChats([...chats, { type: 'user', message }, { type: 'bot', message: res.data.response }]);
    } catch (error) {
      setChats([...chats, { type: 'bot', message: 'Error communicating with server' }]);
    }
  };

  return (
    <div className="chatbot-app">
      <ChatWindow chats={chats} />
      <UserInput onSend={handleSend} />
    </div>
  );
};

export default ChatbotApp;

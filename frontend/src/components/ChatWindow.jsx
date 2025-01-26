import React from 'react';

const ChatWindow = ({ chats }) => {
  return (
    <div className="chat-window">
      {chats.map((chat, index) => (
        <div key={index} className={`chat ${chat.type}`}>
          {chat.message}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;

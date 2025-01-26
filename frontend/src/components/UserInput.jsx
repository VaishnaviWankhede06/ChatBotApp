import React, { useState } from 'react';

const UserInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-input">
      <input
        type="text"
        placeholder="Type your query..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />
      <button type="submit" className="send-btn">Send</button>
    </form>
  );
};

export default UserInput;

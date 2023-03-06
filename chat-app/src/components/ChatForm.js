import React, { useState, useEffect } from "react";

const ChatForm = () => {
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );
  const [inputValue, setInputValue] = useState("");

  // Save messages to local storage when they change
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      text: inputValue,
      timestamp: new Date().getTime(),
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.timestamp}>
            {new Date(message.timestamp).toLocaleTimeString()}: {message.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatForm;

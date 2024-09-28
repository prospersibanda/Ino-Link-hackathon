import React from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import './ChatApp.css';

const ChatApp = () => {
  return (
    <div className="chat-app">
      <ChatList />
      <ChatWindow />
    </div>
  );
};

export default ChatApp;

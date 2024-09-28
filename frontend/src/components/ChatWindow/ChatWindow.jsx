import React from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-with">
          <img src="avatar-placeholder.png" alt="Avatar" className="chat-header-avatar" />
          <span>Malou</span>
        </div>
        <div className="chat-actions">
          <span>📞</span>
          <span>📹</span>
          <span>⋮</span>
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-message">
          <p>Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...</p>
          <span className="chat-time">3:17 PM</span>
        </div>
        <div className="chat-message reply">
          <p>Sounds delicious, Meera! 😋 Can't wait for Saturday! By the way, do you think we should get some ice cream for dessert?</p>
          <span className="chat-time">3:25 PM</span>
        </div>
        <div className="chat-message">
          <p>Absolutely! 🍦 I'm all in for ice cream. I'll bring my favorite flavors. What's your preference?</p>
          <span className="chat-time">3:37 PM</span>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message" />
        <button className="send-button">➤</button>
      </div>
    </div>
  );
};

export default ChatWindow;

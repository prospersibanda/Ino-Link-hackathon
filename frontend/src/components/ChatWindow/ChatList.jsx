import React from 'react';
import './ChatList.css';

const ChatList = () => {
  const chats = [
    { name: 'Lindsey', message: 'Hey there! Did you catch the latest episode of this series, it...', time: '5s', unread: 1 },
    { name: 'Mpho', message: 'When will the work be ready???', time: '5m', unread: 4 },
    { name: 'Malou', message: 'Awesome! I love chocolate chip cookie dough. Looking forward...', time: '1h', unread: 0 },
    { name: 'Zinhle', message: 'Just wanted to share the awesome pics from our hiking...', time: '2h', unread: 0 },
    { name: 'Sibanda', message: 'That is a good idea. I will try to communicate this with the team...', time: '1d', unread: 0 },
  ];

  return (
    <div className="chat-list">
      <div className="profile-header">
        <div className="profile-info">
          <img src="profile-placeholder.png" alt="Profile" className="profile-picture" />
          <div className="profile-details">
            <span>Prosper</span>
            <span className="username">@Prosper_123</span>
          </div>
        </div>
        <div className="notifications">
          <span>🔔</span>
        </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search chats" />
      </div>
      <div className="chats">
        {chats.map((chat, index) => (
          <div key={index} className="chat-item">
            <div className="chat-avatar">
              <img src="avatar-placeholder.png" alt="Avatar" />
            </div>
            <div className="chat-info">
              <span className="chat-name">{chat.name}</span>
              <span className="chat-message">{chat.message}</span>
            </div>
            <div className="chat-meta">
              <span className="chat-time">{chat.time}</span>
              {chat.unread > 0 && <span className="unread-count">{chat.unread}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;

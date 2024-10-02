import React from 'react';

const MessageList = ({ messages, onMarkAsRead }) => {
  return (
    <div className="p-4">
      {messages.length === 0 ? (
        <p>No messages</p>
      ) : (
        messages.map((message) => (
          <div key={message.id} className={`p-2 border-b ${message.isRead ? 'bg-gray-100' : 'bg-white'}`}>
            <h3 className={`font-bold ${message.priority === 'high' ? 'text-red-500' : 'text-black'}`}>
              {message.title}
            </h3>
            <p style={{margin: 2}}>{message.content}</p>
            <button style={{border: '0.5px solid grey', borderRadius: 3.5, padding: 4.5, marginTop: 3.5}} onClick={() => onMarkAsRead(message.id)}>Mark as Read</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MessageList;

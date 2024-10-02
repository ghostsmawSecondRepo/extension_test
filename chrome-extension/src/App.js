import React, { useEffect, useState } from 'react';
import MessageList from './components/MessageList';
import { getMessages, markAsRead } from './api';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        console.log('Fetched messages:', data);
        setMessages(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleMarkAsRead = async (id) => {
    await markAsRead(id);
    setMessages((prev) => prev.map(msg => (msg.id === id ? { ...msg, isRead: true } : msg)));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{width: 300, height: 300, padding: 10, borderStyle: 5}}>
      <h1 style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Messages</h1>
      <MessageList messages={messages} onMarkAsRead={handleMarkAsRead} />
    </div>
  );
};

export default App;

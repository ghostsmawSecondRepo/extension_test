// chrome.runtime.onInstalled.addListener(() => {
//   console.log('Extension installed');
//   // Initialize some messages on install
//   const initialMessages = [
//     { id: 1, title: 'New High Priority Message', content: 'This is important. All the task needs to be fixed.', isRead: false, priority: 'high' },
//     { id: 2, title: 'New Regular Update', content: 'This is just an update. Meeting for 5 PM, Wednesday.', isRead: false, priority: 'medium' },
//     { id: 2, title: 'Team Update', content: 'This is just an update. Meeting for 11 PM, Friday.', isRead: false, priority: 'high' },
//     { id: 2, title: 'Work Update', content: 'This is just an update. Work update for 5 PM, Monday.', isRead: false, priority: 'medium' },
//   ];
//   chrome.storage.local.set({ messages: initialMessages }, () => {
//     console.log('Initial messages stored.');
//   });
// });

// const fetchNewMessages = async () => {
//   return new Promise((resolve) => {
//     chrome.storage.local.get(['messages'], (result) => {
//       resolve(result.messages || []);
//     });
//   });
// };

// const checkForNewMessages = async () => {
//   const newMessages = await fetchNewMessages();
//   const highPriorityMessages = newMessages.filter(msg => msg.priority === 'high' && !msg.isRead);
//   if (highPriorityMessages.length > 0) {
//     chrome.notifications.create({
//       type: 'basic',
//       iconUrl: 'icon48.png',
//       title: 'High Priority Message',
//       message: highPriorityMessages[0].content,
//       priority: 2
//     });
//   }
//   const unreadCount = newMessages.filter(msg => !msg.isRead).length;
//   chrome.action.setBadgeText({ text: unreadCount > 0 ? unreadCount.toString() : '' });
// };

// setInterval(checkForNewMessages, 60000); // Check every minute

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
  // Initialize some messages on install
  const initialMessages = [
    { id: 1, title: 'New High Priority Message', content: 'This is important. All the task needs to be fixed.', isRead: false, priority: 'high' },
    { id: 2, title: 'New Regular Update', content: 'This is just an update. Meeting for 5 PM, Wednesday.', isRead: false, priority: 'medium' },
    { id: 3, title: 'Team Update', content: 'This is just an update. Meeting for 11 PM, Friday.', isRead: false, priority: 'high' },
    { id: 4, title: 'Work Update', content: 'This is just an update. Work update for 5 PM, Monday.', isRead: false, priority: 'medium' },
  ];
  chrome.storage.local.set({ messages: initialMessages }, () => {
      console.log('Initial messages stored.');
  });
});

const fetchNewMessages = async () => {
  return new Promise((resolve) => {
      chrome.storage.local.get(['messages'], (result) => {
          console.log('Messages retrieved from storage:', result.messages);
          resolve(result.messages || []);
      });
  });
};

const updateBadge = async () => {
  const messages = await fetchNewMessages();
  const unreadCount = messages.filter(msg => !msg.isRead).length;
  chrome.action.setBadgeText({ text: unreadCount > 0 ? unreadCount.toString() : '' });
};

const checkForNewMessages = async () => {
  const newMessages = await fetchNewMessages();
  const highPriorityMessages = newMessages.filter(msg => msg.priority === 'high' && !msg.isRead);
  
  if (highPriorityMessages.length > 0) {
      chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon48.png',
          title: 'High Priority Message',
          message: highPriorityMessages[0].content,
          priority: 2
      });
  }

  // Update the badge text based on unread messages
  updateBadge();
};

setInterval(checkForNewMessages, 60000); // Check every minute

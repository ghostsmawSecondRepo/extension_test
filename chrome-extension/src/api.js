export const getMessages = async () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.storage.local.get(['messages'], (result) => {
      console.log('Messages retrieved from storage:', result.messages);
      resolve(result.messages || []);
    });
  });
};

// export const markAsRead = async (id) => {
//   // eslint-disable-next-line no-undef
//   chrome.storage.local.get(['messages'], (result) => {
//     const messages = result.messages || [];
//     const updatedMessages = messages.map(msg => (msg.id === id ? { ...msg, isRead: true } : msg));
//     // eslint-disable-next-line no-undef
//     chrome.storage.local.set({ messages: updatedMessages });
//   });
// };

export const markAsRead = async (id) => {
  // eslint-disable-next-line no-undef
  chrome.storage.local.get(['messages'], (result) => {
      const messages = result.messages || [];
      const updatedMessages = messages.map(msg => (msg.id === id ? { ...msg, isRead: true } : msg));
      // eslint-disable-next-line no-undef
      chrome.storage.local.set({ messages: updatedMessages }, () => {
          // Call the updateBadge function to refresh the badge text
          updateBadge();
      });
  });
};

// Ensure to expose updateBadge
export const updateBadge = async () => {
  const messages = await getMessages(); // Ensure to import getMessages
  const unreadCount = messages.filter(msg => !msg.isRead).length;
  // eslint-disable-next-line no-undef
  chrome.action.setBadgeText({ text: unreadCount > 0 ? unreadCount.toString() : '' });
};

export const saveOptions = (options) => {
  // eslint-disable-next-line no-undef
  chrome.storage.local.set({ options }, () => {
    console.log('Options saved:', options);
  });
};

export const getOptions = () => {
  return new Promise((resolve) => {
    // eslint-disable-next-line no-undef
    chrome.storage.local.get(['options'], (result) => {
      console.log('Options retrieved from storage:', result.options);
      resolve(result.options || {});
    });
  });
};

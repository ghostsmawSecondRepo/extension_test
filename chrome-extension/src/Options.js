import React, { useEffect, useState } from 'react';
import { saveOptions, getOptions } from './api'; // Import API functions for saving and retrieving options

const Options = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    // Load options when the component mounts
    const loadOptions = async () => {
      const options = await getOptions();
      setNotificationsEnabled(options.notificationsEnabled || false);
      setTheme(options.theme || 'light');
    };
    loadOptions();
  }, []);

  const handleSave = async () => {
    const options = { notificationsEnabled, theme };
    await saveOptions(options);
    alert('Options saved!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Extension Options</h1>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
            className="mr-2"
          />
          Enable Notifications
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border p-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Options
      </button>
    </div>
  );
};

export default Options;

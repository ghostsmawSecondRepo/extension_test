# Organization Messages Chrome Extension

This Chrome extension displays organization-wide messages for users, categorized by priority levels and marked as read/unread.

## Features
1. Displays a badge icon for unread messages.
2. Pop-up UI to display messages, mark them as read, and categorize them.
3. Stores message history locally using Chrome's storage API.
4. Background script to fetch new messages periodically.
5. Options page for user preferences.
6. CI/CD pipeline with GitHub Actions.
7. Fully tested with Jest and React Testing Library.

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-extension-name.git
   cd your-extension-name

2. Install the dependencies:
    npm install

### Running the Extension

1. Build the extension:

    npm run build

2. Load the extension into Chrome:

    - Open chrome://extensions/
    - Enable "Developer mode" (top right).
    - Click "Load unpacked" and select the build directory.

### Running Tests

To run the tests using Jest:

    npm test

### Assumptions Made

    - The Chrome storage API is used to persist message state.
    - Mocked data simulates an API providing organization-wide messages.
    - Users can adjust their preferences for notification sounds and themes on the options page.
    - The extension should display messages in real-time.


### Architectural Decisions

    - React + Tailwind CSS: The UI is built using React for efficient component rendering and Tailwind for a flexible, utility-first CSS framework.
    - State Management: Managed using React hooks and Chrome's storage API.
    - Modular Code Structure: Separated the popup, background script, and options page to ensure better maintainability.
    - Testing: Jest is used for unit testing, and React Testing Library is used for component rendering tests.
    - CI/CD: Automated testing and builds are set up with GitHub Actions, ensuring quality control on each push or pull request.

### Future Improvements

    - Implement real API integration for fetching messages.
    - Add localization support for different languages.
    - Improve the UI for better accessibility (ARIA standards).
    - Allow users to customize notification intervals.

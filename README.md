# Profile Locker Chrome Extension

## Overview
**Profile Locker** is a Chrome extension designed to protect your browser sessions with a password lock. It ensures that every time you open your Chrome profile, you'll be prompted to enter your password before accessing any tabs or content.

---

## Features
- **Password Lock**: Prompts for a password every time the Chrome profile is opened.
- **URL Restriction**: Blocks access to all tabs until the correct password is entered.
- **Custom New Tab Redirection**: Redirects to a fresh `chrome://newtab` after unlocking.
- **Modern UI Design**: Professionally styled lock and registration screens with responsive layouts.
- **First-Time User Registration**: Simple and secure setup for new users.

---

## Installation

1. **Download the Source Code**:
   - Clone the repository using:
     ```bash
     git clone https://github.com/bxbx1205/profile-locker.git
     ```

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle in the top-right corner).
   - Click on **Load Unpacked** and select the `profile-locker` folder.

3. **Start Using Profile Locker**:
   - Open a new Chrome profile and follow the registration steps.

---

## How It Works

### First-Time Setup
1. The extension detects if no user is registered.
2. Redirects to a **registration page** where you set up your username and password.

### Locked Profile
1. When Chrome is opened, the extension locks all tabs.
2. Redirects you to the **lock screen** where you must enter your password to unlock.

### Unlocking
1. Enter the correct password.
2. Once verified, the extension:
   - Unlocks your profile.
   - Redirects you to a new tab (`chrome://newtab`).

---

## Design

- **Professional UI**: A frosted-glass effect combined with a modern gradient background.
- **Responsive Layout**: Works seamlessly on all screen sizes.
- **Accessible**: Large buttons and clear fonts for better usability.

---

## Security

Profile Locker uses **Chrome's Storage API** to securely save your password. All data is stored locally, ensuring privacy and security.

---

## Known Issues

- The extension does not support syncing passwords across multiple devices.
- If the extension is disabled, the lock screen will not appear.

---

## Contributing

We welcome contributions! If you'd like to enhance Profile Locker, please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---


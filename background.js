chrome.runtime.onInstalled.addListener(() => {
  initializeProfileLock();
});

chrome.runtime.onStartup.addListener(() => {
  initializeProfileLock();
});

function initializeProfileLock() {
  chrome.storage.sync.get(["username", "profilePassword"], (data) => {
    if (!data.username || !data.profilePassword) {
      chrome.storage.sync.set({ profileLocked: false });
    } else {
      chrome.storage.sync.set({ profileLocked: true });
    }
  });
}

chrome.tabs.onCreated.addListener((tab) => {
  handleNewTab(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading" && changeInfo.url) {
    enforceLock(tabId, changeInfo.url);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    enforceLock(tab.id, tab.url || "");
  });
});

function handleNewTab(tab) {
  const newTabUrl = "chrome://newtab/";
  if (tab.pendingUrl === newTabUrl || tab.url === newTabUrl) {
    chrome.storage.sync.get(["profileLocked", "username", "profilePassword"], (data) => {
      if (!data.username || !data.profilePassword) {
        chrome.tabs.update(tab.id, { url: chrome.runtime.getURL("register.html") });
      } else if (data.profileLocked) {
        chrome.tabs.update(tab.id, { url: chrome.runtime.getURL("locked.html") });
      }
    });
  }
}

function enforceLock(tabId, url) {
  if (url === "chrome://newtab/") {
    return;
  }
  chrome.storage.sync.get(["profileLocked", "username", "profilePassword"], (data) => {
    const lockedUrl = chrome.runtime.getURL("locked.html");
    const registerUrl = chrome.runtime.getURL("register.html");
    if (!data.username || !data.profilePassword) {
      if (url !== registerUrl) {
        chrome.tabs.update(tabId, { url: registerUrl });
      }
      return;
    }
    if (data.profileLocked && url !== lockedUrl && url !== registerUrl) {
      chrome.tabs.update(tabId, { url: lockedUrl });
    }
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "unlock") {
    chrome.storage.sync.set({ profileLocked: false }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});

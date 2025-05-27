import { SaveDataInStorage } from "./common.js";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "saveUserSiteData") {
    const userCredentialData = message.data;
    SaveDataInStorage(userCredentialData );
  }
});

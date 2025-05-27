export async function SaveDataInStorage(newEntry) {
  let storageData = await getStoredData();

  if (
    !storageData.data ||
    !Array.isArray(storageData.data.userCredentialData)
  ) {
    await chrome.storage.local.set({
      ...storageData,
      data: {
        userCredentialData: [newEntry]
      }
    });
    return;
  }

  const updatedList = [...storageData.data.userCredentialData, newEntry];

  await chrome.storage.local.set({
    ...storageData,
    data: {
      ...storageData.data,
      userCredentialData: updatedList
    }
  });
}

async function getStoredData() {
  const data = await chrome.storage.local.get();
  return data;
}


export async function deleteDataFromStorage() {
  await chrome.storage.local.remove();
}

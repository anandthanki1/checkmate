console.log('content script is running');

chrome.runtime.sendMessage('message from content script', (res) => {
  console.log(res);
});

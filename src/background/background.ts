chrome.runtime.onInstalled.addListener((details) => {
  console.log("-----------".repeat(5));
  console.log(details);
  console.log("-----------".repeat(5));
});

chrome.bookmarks.onCreated.addListener((id, bookmark) => {
  console.log("-----------".repeat(5));
  console.log(id);
  console.log(bookmark);
  console.log("-----------".repeat(5));
});

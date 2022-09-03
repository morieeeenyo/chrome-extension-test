// tabs.query は指定した条件に当てはまるタブを全て取得する。
// この場合はアクティブなタブが一つ取得できる。
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  console.log({ tabs })
});
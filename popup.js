// ボタンクリック時に実行する処理を定義
const button = document.getElementById('display')
button.addEventListener('click', () => {
  // background.jsにデータを送信(この情報は同じ拡張機能内であればどのファイルでも取得可能)
  chrome.runtime.sendMessage({ name: 'displayUrl:background' })
})
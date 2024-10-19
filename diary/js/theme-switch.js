const themeToggleButton = document.getElementById('toggle-theme');

// ダーク/ライトテーマを切り替える関数
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// ボタンクリックでテーマ切り替えを実行
themeToggleButton.addEventListener('click', toggleTheme);

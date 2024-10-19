const doseiImage = document.getElementById('dosei-image');

// 画像がクリックされたときにフォントを変更する関数
function switchToDoseiFont() {
    document.body.classList.toggle('dosei-font');
}

// クリックイベントのリスナーを追加
doseiImage.addEventListener('click', switchToDoseiFont);

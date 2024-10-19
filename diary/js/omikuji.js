const omikujiButton = document.getElementById('omikuji-button');
const omikujiResult = document.getElementById('omikuji-result');

// おみくじの結果リスト
const omikujiList = [
    "大吉 - 今すぐパチンコ屋にいくべし！",
    "吉 - ちょっとした幸せが訪れそう。",
    "中吉 - まあまあ良いことがありそう。",
    "小吉 - 小さな幸運に恵まれるかも。",
    "末吉 - 最後にちょっとだけいいことがあるかも。",
    "凶 - 今日は気をつけて過ごしましょう。",
    "大凶 - 空から猫が降ってくる"
];

// ボタンがクリックされたときにランダムなおみくじを表示
omikujiButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * omikujiList.length);
    omikujiResult.textContent = omikujiList[randomIndex];
});

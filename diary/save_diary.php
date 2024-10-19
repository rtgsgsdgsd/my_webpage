<?php
// データベース接続の設定
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "diary_db";

// フォームデータを受け取る
$title = $_POST['title'];
$content = $_POST['content'];

// データベースに接続
$conn = new mysqli($servername, $username, $password, $dbname);

// 接続をチェック
if ($conn->connect_error) {
    die("接続に失敗しました: " . $conn->connect_error);
}

// データを保存
$sql = "INSERT INTO diary_entries (title, content, created_at) VALUES ('$title', '$content', NOW())";

if ($conn->query($sql) === TRUE) {
    echo "日記が保存されました！";
} else {
    echo "エラー: " . $sql . "<br>" . $conn->error;
}

// 接続を閉じる
$conn->close();
?>

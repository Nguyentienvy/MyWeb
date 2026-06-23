const siteName = "MyWeb";
let topic = "Giới thiệu bản thân";
let imageCount = 11;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
  mainTitle.textContent = "Nguyễn Tiến Vỹ 👋";
  welcomeText.textContent = "Chào mừng bạn đến với trang giới thiệu bản thân của mình!";
}

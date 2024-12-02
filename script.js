const slides = [
  { text: "selamat ulang tahun sayangku 🎂🫶🏻", photo: "img/photo1.png" },
  { text: "semoga semua impianmu menjadi kenyataan! 💖", photo: "img/photo2.png" },
  { text: "hari spesial ini adalah milikmu. nikmati setiap momennya! 🌟", photo: "img/photo3.png" },
  { text: "kamu adalah orang yang luar biasa. tetaplah bersinar! 🌈", photo: "img/photo4.png" },
  { text: "hari ini, semua doa dan cinta tertuju padamu. 🎁", photo: "img/photo5.png" },
  { text: "terima kasih telah membuat dunia lebih indah! 💕", photo: "img/photo6.png" },
  { text: "selamat ulang tahun! semoga bahagia selalu! 🎉", photo: "img/photo7.png" },
  { text: "", photo: "" },
];

let currentSlide = 0;
const textElement = document.getElementById("text");
const photoElement = document.getElementById("photo");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("backgroundMusic");
let isMusicPlaying = false;

function updateSlide() {
  textElement.classList.add("hidden");
  photoElement.classList.add("hidden");

  setTimeout(() => {
    if (currentSlide < slides.length) {
      textElement.textContent = slides[currentSlide].text;
      photoElement.src = slides[currentSlide].photo;
      currentSlide++;
    }

    if (currentSlide === slides.length) {
        nextBtn.style.display = "none";
        textElement.textContent = "sekali lagi aku ucapkan selamat ulang tahun sayangku ❤️❤️❤️";
        photoElement.src = "img/special_photo.png";
      } else {
        nextBtn.textContent = "Selanjutnya";
      }

    textElement.classList.remove("hidden");
    photoElement.classList.remove("hidden");
  }, 500);
}

nextBtn.addEventListener("click", () => {
  if (nextBtn.textContent === "Selanjutnya" && currentSlide < slides.length) {
    if (currentSlide === slides.length) {
      updateSlide();
    } else {
      if (!isMusicPlaying) {
        music.play().then(() => {
          console.log("Musik dimulai.");
          isMusicPlaying = true;
        }).catch((error) => {
          console.error("Gagal memutar musik:", error);
        });
      }
      updateSlide();
    }
  }
});

music.addEventListener("ended", () => {
  console.log("Musik selesai, mengulang...");
  music.currentTime = 0;
  music.play();
});


updateSlide();

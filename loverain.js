const button = document.getElementById('reveal-button');
const confession = document.getElementById('confession-text');
const container = document.getElementById('love-container');
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');

const message = "i love you more than words can say, meskipun kadang aku keliatan cuek atau diem aja, sebenernya kamu tuh berarti banget buat aku. aku sayang banget sama kamu, cuma kadang aku emang masih belajar gimana caranya nunjukin itu semua. aku berharap kamu ngerti yaa, kalo aku diem bukan berarti aku ga peduli. aku lagi berusaha buat lebih peka sama hal-hal kecil, supaya aku bisa makin menghargai kamu tiap harinya. aku ga bohong kok, rasa sayang aku ke kamu tuh tulus banget. aku bakal terus belajar buat buktiin ke kamu, ke dunia, bahkan ke semesta, kalo kamu satu-satunya yang aku sayang segininya. and you have to know, babe, i love you more than anything. i’m not attracted to anyone else, because for me, you're the most beautiful soul i’ve ever known. i feel so lucky and grateful to have you in my life. i love you, always.";
button.addEventListener('click', () => {
  button.style.display = 'none';
  confession.classList.remove('hidden');
  typeWriter();
  fadeInMusic();
});

let i = 0;
function typeWriter() {
  if (i < message.length) {
    confession.innerHTML += message.charAt(i);

    // atur speed ngetik
    let delay = 50;
    const char = message.charAt(i);
    if (char === ',' || char === ';') delay = 300;
    else if (char === '.' || char === '!' || char === '?') delay = 500;

    i++;
    adjustFontSize();
    setTimeout(typeWriter, delay);
  } else {
    musicToggle.style.display = 'inline-block';
  }
}

function adjustFontSize() {
  const containerHeight = container.clientHeight * 0.8; // 80% tinggi kotak
  if (confession.scrollHeight > containerHeight) {
    let currentFontSize = parseFloat(window.getComputedStyle(confession).fontSize);
    if (currentFontSize > 12) { // jangan terlalu kecil
      confession.style.fontSize = (currentFontSize - 1) + "px";
    }
  }
}

function fadeInMusic() {
  music.volume = 0;
  music.play();
  let volume = 0;
  const interval = setInterval(() => {
    if (volume < 0.5) {
      volume += 0.02;
      music.volume = volume;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

musicToggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "play";
  } else {
    music.pause();
    musicToggle.textContent = "pause music";
  }
});
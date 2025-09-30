window.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('car-audio');
  var btn = document.getElementById('enable-sound');

  // Intentar reproducir automáticamente
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(function() {
      btn.style.display = 'block';
      btn.addEventListener('click', function() {
        audio.muted = false; // 🔓 Quitar silencio
        audio.currentTime = 0;
        audio.play();
        btn.style.display = 'none';
      });
    });
  }

  // 🎯 Textos aleatorios
  const textos = [
    " Bonito día mi amor ❤️",
    "Espero que te guste 😍",
    "💖 Te amo amorcito 💖",
    "mau mua 😘",
    "🌟 Eres mi inspiración 🌟",
    "🚗 Viajemos juntos siempre 🚗",
    "🌹 Gracias por existir 🌹",
    "✨ Eres mi persona favorita ✨",
    "Soy mejor persona por ti 😁",
    "Contigo, todo es mejor 💕",
    "Eres mi sueño hecho realidad 🌈",
    " Eres el mejor jugador de DOTAAAAAAA ❤️",
    "Eres mi sol en días nublados ☀️",
    "A tu lado, todo es posible 💪",
    "Me encantas 😊",
    "Eres mi hogar 🏡",
    "Juntos somos invencibles 🛡️",
  ];


 let indice = 0; // Para recorrer los textos

  function mostrarTexto() {
    const container = document.getElementById('text-container');
    const div = document.createElement('div');
    div.className = 'text-box';

    // Texto en secuencia
    div.textContent = textos[indice];
    indice = (indice + 1) % textos.length; // Avanza y vuelve al inicio

    // Posición aleatoria horizontal
    const maxWidth = window.innerWidth - 300;
    const left = Math.floor(Math.random() * maxWidth);

    // Posición aleatoria vertical (en la franja de 70vh antes del track)
    const maxHeight = (window.innerHeight * 0.7) - 50;
    const top = Math.floor(Math.random() * maxHeight);

    div.style.left = left + "px";
    div.style.top = top + "px";

    container.appendChild(div);

    // Eliminar después de 3s
    setTimeout(() => {
      div.remove();
    }, 3000);
  }

  // Mostrar texto cada 4 segundos en secuencia
  setInterval(mostrarTexto, 2000);
});

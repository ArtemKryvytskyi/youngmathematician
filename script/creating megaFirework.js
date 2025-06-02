export function megaFirework() {
  const duration = 10 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    origin: { y: 0.7 },
    spread: 360,
    ticks: 60,
    zIndex: 1000
  };
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    const particleCount = 100 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount: particleCount,
      angle: randomInRange(55, 125),
      spread: randomInRange(100, 360),
      startVelocity: randomInRange(30, 60),
      scalar: randomInRange(1.2, 2.2),
      origin: {
        x: Math.random(),
        y: Math.random() * 0.7
      }
    });
  }, 200);
}
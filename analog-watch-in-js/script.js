function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourDeg = ((hours + minutes / 60) % 12) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;
  
    setRotation(document.querySelector('.hour-hand'), hourDeg);
    setRotation(document.querySelector('.minute-hand'), minuteDeg);
    setRotation(document.querySelector('.second-hand'), secondDeg);
  }
  
  function setRotation(element, deg) {
    element.style.transform = `rotate(${deg}deg)`;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initial call to avoid delay on first load

  
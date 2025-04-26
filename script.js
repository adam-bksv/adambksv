<script>
const card = document.querySelector('.centered-glass');

if (card) {
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    card.style.transform = `translate(-50%, -50%) rotateX(${y}deg) rotateY(${-x}deg)`;
  });

  document.addEventListener('mouseout', (e) => {
    // Only reset when mouse leaves the window
    if (!e.relatedTarget || e.relatedTarget.nodeName === "HTML") {
      card.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
    }
  });
}
</script>

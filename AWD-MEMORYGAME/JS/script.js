const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function() {
    if (!this.querySelector('.card-image')) {
      const image = document.createElement('img');
      image.src = '/Pictures/star.png';
      image.classList.add('card-image');
      this.appendChild(image);
    }
  });
});
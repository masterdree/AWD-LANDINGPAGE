
let currentBox = null;

for (let i = 1; i <= 7; i++) {
    document.querySelector('.box' + i).addEventListener('click', () => {
        const bigBox = document.querySelector('#big-box' + i);

        if (currentBox) {
            currentBox.style.animation = `moveUp${currentBox.id.slice(-1)} 2s forwards`;
        }

        bigBox.style.display = 'block'; // show the big box
        bigBox.style.animation = `moveDown${bigBox.id.slice(-1)} 2s forwards, fadeOut 3s forwards`;

        currentBox = bigBox;
    });
}
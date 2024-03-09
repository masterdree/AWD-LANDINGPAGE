document.getElementById('color-mode-button').addEventListener('click', function() {
    var resumeBox = document.querySelector('.resume-box');
    var buttonBox = document.querySelector('.button-box');
    var colorModeButton = document.getElementById('color-mode-button');
    resumeBox.classList.toggle('dark-mode');
    buttonBox.classList.toggle('dark-mode');
    colorModeButton.classList.toggle('dark-mode');
});

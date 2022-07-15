const lightMode = document.getElementById('lightMode');

lightMode.addEventListener('change', () => {
    document.body.classList.toggle('light');
})
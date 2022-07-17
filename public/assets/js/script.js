// ######################################################
// #####   Injection de class pour mode jour/nuit   ##### 
// ######################################################

const lightMode = document.getElementById('lightMode');

lightMode.addEventListener('change', () => {
    document.body.classList.toggle('light');
});

// ######################################################
// #####              Animation du h1               ##### 
// ######################################################

const nameAnim = document.querySelector('h1');

new Typewriter(nameAnim, {
    deleteSpeed: 20,
    typeSpeed: 50
})
.pauseFor(300)
.typeString('<span style="font-style: italic;">Développeur Web</span>')
.pauseFor(1000)
.deleteChars(15)
.pauseFor(300)
.typeString('<span style="font-style: italic;">Apprenti Dev Web</span>')
.start()
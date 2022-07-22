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

// ######################################################
// #####              Animation Scroll              ##### 
// ######################################################

let skill = document.getElementById('skills');
let project1 = document.querySelector('.project1');
let project2 = document.querySelector('.project2');
let tools = document.getElementById('tools');
let sectionsArray = [skill, project1, project2, tools];

let animationTrigger = (element) => {
    const {scrollTop, clientHeight} = document.documentElement;
    if(scrollTop > (scrollTop + element.getBoundingClientRect().top - 800).toFixed()) {
        element.classList.add('animationOnScroll');
    }
}

window.addEventListener('scroll', () => {
    sectionsArray.forEach(element => {
        animationTrigger(element);
    })
})
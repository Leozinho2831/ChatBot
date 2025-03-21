// menu nav
const menu = document.querySelector('.js-menu');
const gridContainer = document.querySelector('.grid-container');

const classOpenMenu = 'open-menu';
const widthScreen = document.body.clientWidth;

if(widthScreen > 640){
    gridContainer.classList.add(classOpenMenu);
} else {
    gridContainer.classList.remove(classOpenMenu);
}

menu.onclick = () => {
    gridContainer.classList.toggle(classOpenMenu);
}

// menu options
const menuOptions = document.querySelector('.js-menuOptions');
const buttonsOptions = document.querySelectorAll('.js-options');

document.onclick = (event) => {
    const verify = !menuOptions.contains(event.target) && !event.target.closest('.js-options');

    if(verify){
        menuOptions.classList.add('hidden');
    }
}

function openMenuOptions(event){
    const itemEvent = event.currentTarget;
    const distanceTop = itemEvent.offsetTop;
    
    menuOptions.style.cssText = `top: ${distanceTop}px`;

    if(!menuOptions.classList.contains('hidden')){
        menuOptions.classList.add('hidden');
    } else {
        menuOptions.classList.remove('hidden');
    }
}

buttonsOptions.forEach((buttonOptions) => {
    buttonOptions.onclick = (event) => {
        openMenuOptions(event);
    }
});
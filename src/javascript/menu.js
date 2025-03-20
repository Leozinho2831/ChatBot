const menu = document.querySelector('.js-menu');
const itensMenu = document.querySelector('.js-sectionMenu');
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

const buttonPlus = document.querySelector('.js-buttonPlus');
const buttonLoad = document.querySelector('.js-buttonLoad');

const sectionPlus = document.querySelector('.js-sectionPlus');
const sectionLoad = document.querySelector('.js-sectionLoad');

function toggleText(element){
    const containerItens = element.previousElementSibling;
    const classRotate180 = 'rotate180'; 

    if(containerItens === buttonPlus){
        const textPlus = 'Mais';
        const textLess = 'Menos';
        
        containerItens.children[0].classList.toggle(classRotate180);

        if(containerItens.children[1].textContent === textPlus){
            containerItens.children[1].textContent = textLess;

            buttonLoad.classList.remove('hidden');
            buttonLoad.classList.add('flex');
        } else {
            containerItens.children[1].textContent = textPlus;

            buttonLoad.classList.remove('flex');
            buttonLoad.classList.add('hidden');
        }

    } else {

        const textPlus = 'Carregar Mais';
        const textLess = 'Carregar Menos';

        containerItens.children[0].classList.toggle(classRotate180);

        if(containerItens.children[1].textContent === textPlus){
            containerItens.children[1].textContent = textLess;
        } else {
            containerItens.children[1].textContent = textPlus;
        }

    }
}

function openHistory(element){
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden');
        element.classList.add('block');
    } else {
        element.classList.remove('block');
        element.classList.add('hidden');
    }

    toggleText(element);
}

buttonPlus.onclick = () => {
    openHistory(sectionPlus);
}

buttonLoad.onclick = () => {
    openHistory(sectionLoad);
}

const menuOptions = document.querySelector('.js-menuOptions');
const buttonsOptions = document.querySelectorAll('.js-options');
const nav = document.querySelector('.js-nav');

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
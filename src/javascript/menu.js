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
    console.log(element.previusElementSibling);
    if(element.previusElementSibling === buttonPlus){
        element.children[1].textContent = 'Menos';
        element.children[0].style.transform = 'rotate(180deg)';
    } else {
        element.children[0].textContent = 'Carregar menos';
    }
}

function openHistory(element){
    console.log(element);
    element.classList.remove('hidden');
    element.classList.add('block');

    toggleText(element);
}

buttonPlus.onclick = () => {
    openHistory(sectionPlus);
}

buttonLoad.onclick = () => {
    openHistory(sectionLoad);
}
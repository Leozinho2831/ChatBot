import { historyItem, firstMessage, historyItemPlus, historyItemLoad, openHistory } from './components.js';

const nav = document.querySelector('.js-nav');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');

function openMoreHistory(){
    const buttonPlus = document.querySelector('.js-buttonPlus');
    const buttonLoad = document.querySelector('.js-buttonLoad');

    const sectionPlus = document.querySelector('.js-sectionPlus');
    const sectionLoad = document.querySelector('.js-sectionLoad');

    if(sectionPlus && buttonPlus){
        buttonPlus.onclick = () => {
            openHistory(sectionPlus);
        }
    }

    if(sectionLoad && buttonLoad){
        buttonLoad.onclick = () => {
            openHistory(sectionLoad);
        }
    }
}

function createMessage(){
    const navChild = nav.querySelectorAll('.js-message').length;

    const sectionPlus = document.querySelector('.js-sectionPlus');
    const sectionLoad = document.querySelector('.js-sectionLoad');
    // trocar texto por criação do gimini
    const message = `${input.value}`;
    
    switch (true) {
        case navChild === 0:
            nav.innerHTML += firstMessage(message);
            break;
        case navChild > 0 && navChild < 4: 
            nav.innerHTML += historyItem(message);
            break;
        case navChild === 4: 
            nav.innerHTML += historyItemPlus(message);
            openMoreHistory();
            break;
        case navChild > 4 && navChild < 9: 
            sectionPlus.innerHTML += historyItem(message);
            break;
        case navChild === 9: 
            sectionPlus.innerHTML += historyItemLoad(message);
            openMoreHistory();
            break;
        case navChild > 9:
            sectionLoad.innerHTML += historyItem(message);
            break;
    }

    input.value = '';
}

form.onsubmit = (event) => {
    event.preventDefault();
    createMessage();
}

form.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        event.preventDefault();
        createMessage();
    }
});
import { firstHistory, historyItem } from './components.js';

const nav = document.querySelector('.js-nav');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');

function createMessage(){
    const navChild = nav.querySelectorAll('.js-message').length;

    // trocar texto por criação do gimini
    const message = `${input.value}`;

    if(navChild === 0){
        nav.innerHTML += firstHistory(message);
    } else {
        nav.innerHTML += historyItem(message);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createMessage();
});

form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        createMessage();
    }
});
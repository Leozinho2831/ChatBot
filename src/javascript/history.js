import { historyItem, firstMessage, historyItemPlus, historyItemLoad } from './components.js';

const nav = document.querySelector('.js-nav');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');

function openMoreHistory(){
    const buttonPlus = document.querySelector('.js-buttonPlus');
    const buttonLoad = document.querySelector('.js-buttonLoad');

    const sectionPlus = document.querySelector('.js-sectionPlus');
    const sectionLoad = document.querySelector('.js-sectionLoad');

    function toggleTextPlus(element, button){
        const containerItens = element.previousElementSibling;
        const classRotate180 = 'rotate180'; 

        if(containerItens.classList.contains('js-buttonPlus')){
            const textPlus = 'Mais';
            const textLess = 'Menos';
                
            containerItens.children[0].classList.toggle(classRotate180);
    
            if(containerItens.children[1].textContent === textPlus){
                containerItens.children[1].textContent = textLess;
    
                button.classList.remove('hidden');
                button.classList.add('flex');
            } else {
                containerItens.children[1].textContent = textPlus;
    
                button.classList.remove('flex');
                button.classList.add('hidden');
            }
        } else if(button.classList.contains('js-buttonLoad')){
            const textLoadPlus = 'Carregar Mais';
            const textLoadLess = 'Carregar Menos';

            containerItens.children[0].classList.toggle(classRotate180);

            if(containerItens.children[1].textContent === textLoadPlus){
                containerItens.children[1].textContent = textLoadLess;
            } else {
                containerItens.children[1].textContent = textLoadPlus;
            }
        } else {

        }
        
    }

    function openHistory(element, button){
        if(element.classList.contains('hidden')){
            element.classList.remove('hidden');
            element.classList.add('block');
        } else {
            element.classList.remove('block');
            element.classList.add('hidden');
        }

        toggleTextPlus(element, button);
    }

    if(sectionPlus && buttonPlus){
        buttonPlus.onclick = () => {
            openHistory(sectionPlus, buttonPlus);
        }
    }

    if(sectionLoad && buttonLoad){
        buttonLoad.onclick = () => {
            openHistory(sectionLoad, buttonLoad);
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
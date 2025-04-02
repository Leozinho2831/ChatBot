import { firstHistory, historyItem } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
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

        form.removeEventListener("submit", submit);
        form.removeEventListener("keydown", keydown);
    }

    const titleChat = document.querySelector('.js-titleChat');

    // necessário a criação dessas funções para remover o evento após primeiro uso
    function submit(event) {
        if(input.value != ''){
            event.preventDefault();
            createMessage();
        } else {
            titleChat.textContent = 'Digite Algo!';

            setTimeout(() => {
                titleChat.textContent = 'Pergunte qualquer coisa!';
            }, 3000);
        }
    }

    function keydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            if (input.value != '' && !event.repeat) {
                createMessage();
            } else if(titleChat) {
                titleChat.textContent = 'Digite Algo!';

                setTimeout(() => {
                    titleChat.textContent = 'Pergunte qualquer coisa!';
                }, 3000);
            }
            
        }
    }

    // é necessário que a função de evento deve estar registrada diretamente
    form.addEventListener('submit', submit);
    form.addEventListener('keydown', keydown);
});
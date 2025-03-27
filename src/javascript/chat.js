import { chatMessage } from './components.js'

const formChat = document.querySelector('.js-form');
const chatInput = document.querySelector('.js-input');
const contentChat = document.querySelector('.js-contentChat');

const buttonMic = document.querySelector('.js-buttonMic');
const buttonSend = document.querySelector('.js-buttonSend');

chatInput.oninput = () => {
    if(chatInput.value){
        buttonMic.classList.add('hidden');
        buttonSend.classList.remove('hidden');
    } else {
        buttonSend.classList.add('hidden');
        buttonMic.classList.remove('hidden');
    }
}

function chatBotText(){
    const buttonConversation = document.querySelector('.js-newConversation');
    const hoverButton = 'hover:bg-gray-950';

    buttonConversation.disabled = false;
    buttonConversation.classList.add(hoverButton);

    buttonSend.classList.add('hidden');
    buttonMic.classList.remove('hidden');

    if(contentChat.children.length === 1){
        contentChat.innerHTML = chatMessage(chatInput);
    } else {
        contentChat.innerHTML += chatMessage(chatInput);
    }

    chatInput.value = '';
    // const buttonCopy = document.querySelectorAll('.');
}

const titleChat = document.querySelector('.js-titleChat');

// addEventListener não sobrescreve eventos
formChat.addEventListener('submit', (event) => {
    event.preventDefault();

    if (chatInput.value !== '') {
        chatBotText();
    } else if (titleChat) {
        titleChat.textContent = 'Digite Algo!';

        setTimeout(() => {
            titleChat.textContent = 'Pergunte qualquer coisa!';
        }, 3000);
    }
});

formChat.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        if (chatInput.value !== '') {
            chatBotText();
        } else if (titleChat) {
            titleChat.textContent = 'Digite Algo!';

            setTimeout(() => {
                titleChat.textContent = 'Pergunte qualquer coisa!';
            }, 3000);
        }
    }
});
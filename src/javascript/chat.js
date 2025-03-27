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
    buttonSend.classList.add('hidden');
    buttonMic.classList.remove('hidden');

    if(contentChat.children.length === 1){
        contentChat.innerHTML = chatMessage(chatInput);
    } else {
        contentChat.innerHTML += chatMessage(chatInput);
    }

    // const buttonCopy = document.querySelectorAll('.');
}

const titleChat = document.querySelector('.js-titleChat');

formChat.onsubmit = formChat.onkeydown = (event) => {
    if(event.type === 'submit' || event.key == 'Enter'){

        if(input.value != ''){
            event.preventDefault();
            chatBotText();
            
        } else if(titleChat){
            event.preventDefault();
            titleChat.textContent = 'Digite Algo!';
    
            setTimeout(() => {
                titleChat.textContent = 'Pergunte qualquer coisa!';
            }, 3000);
        }

    }
}
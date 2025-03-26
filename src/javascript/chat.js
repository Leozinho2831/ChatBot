const formChat = document.querySelector('.js-form');
const chatInput = document.querySelector('.js-input');

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
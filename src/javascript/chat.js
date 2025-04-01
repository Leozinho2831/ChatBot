import { typing, chatMessage, copyTextAI, chatMessageIA } from './components.js';

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

function openMessagesText(){
    const openMessages = document.querySelectorAll('.js-openMessageUser');

    openMessages.forEach((openMessage) =>{
        openMessage.onclick = () => {
            const classRotate180 = 'rotate180';
            openMessage.classList.toggle(classRotate180);
        
            const text = openMessage.previousElementSibling;

            text.classList.toggle('truncate');
            text.classList.toggle('break-words');
        }
    });
}

async function chatBotText(){
    const buttonConversation = document.querySelector('.js-newConversation');
    const hoverButton = 'hover:bg-gray-950';

    buttonConversation.disabled = false;
    buttonConversation.classList.add(hoverButton);

    buttonSend.classList.add('hidden');
    buttonMic.classList.remove('hidden');

    if(contentChat.children.length === 1){
        contentChat.innerHTML = chatMessage(chatInput);
        contentChat.innerHTML += chatMessageIA();
    } else {
        contentChat.innerHTML += chatMessage(chatInput);
        contentChat.innerHTML += chatMessageIA();
    }

    function displayMessage(messageIA){
        openMessagesText();
        copyTextAI();
        chatInput.value = '';
    
        const contentIA = document.querySelectorAll('.js-contentIA');
        
        const lastMessageIA = contentIA[contentIA.length - 1];
    
        // cria um modo que quando o await acabar e existir a messageIA ele remove o hidden      
        lastMessageIA.children[1].classList.remove('hidden');
        lastMessageIA.children[1].classList.add('flex');
    
        lastMessageIA.children[0].remove();
    
        const responseIA = lastMessageIA.children[0].children[1];
    
        typing(responseIA, messageIA, 15);
    }

    // Mensagem da Ia
    try {
        const response = await fetch("https://chat-bot-leo.vercel.app/api/apiRequest", {
            // método post, usado para enviar dados
            method: "POST",
            // indica ao corpo da requisição que formato é JSON
            headers: {
                "Content-Type": "application/json",
            },
            // envia o valor como JSON
            body: JSON.stringify({ input: chatInput.value }), 
        });

        // converte a resposta em um objeto javascript
        const data = await response.json();
        // acessa a mensagem após a promissa resolver
        const messageIA = data.message;

        displayMessage(messageIA);  
    } catch(error) {
        const textError = 'Houve um problema, tente novamente mais tarde!';

        displayMessage(textError);
    }
}

// iniciar página com efeito de digitação
const titleChat = document.querySelector('.js-titleChat');
const text = 'Pergunte qualquer coisa!';

typing(titleChat, text, 100);

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

        if (chatInput.value !== '' && !event.repeat) {
            chatBotText();
        } else if (titleChat) {
            titleChat.textContent = 'Digite Algo!';

            setTimeout(() => {
                titleChat.textContent = 'Pergunte qualquer coisa!';
            }, 3000);
        }
    }
});
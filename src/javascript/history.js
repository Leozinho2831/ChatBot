import { firstHistory, historyItem } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.js-nav');
    const form = document.querySelector('.js-form');
    const chatInput = document.querySelector('.js-input');

    async function createMessage(){
        const navChild = nav.querySelectorAll('.js-message').length;

        if(navChild === 0){
            nav.innerHTML += firstHistory();
        } else {
            nav.innerHTML += historyItem();
        }

        let messageHistory;

        function textHistory(messageHistoryFormated){
            const messagesContents = document.querySelectorAll('.js-message');

            const newMessageContent = messagesContents[messagesContents.length - 1];

            const classAnimateGlass = 'glass';
            const classHoverBg = 'hoverBg';
            
            newMessageContent.classList.remove(classAnimateGlass);
            newMessageContent.classList.add(classHoverBg);
            
            newMessageContent.children[1].textContent = messageHistoryFormated;

            
        }

        try {
            const response = await fetch("https://chat-bot-leo.vercel.app/api/apiRequest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    input: chatInput.value,
                    context: 'resume',
                }), 
            });
    
            const data = await response.json();
            const messageHistory = data.message;
            const messageHistoryFormated = messageHistory
                .replace(/\*\*(.*?)\*\*/g, '');

            textHistory(messageHistoryFormated);
        } catch(error){
            messageHistory = 'Erro';
            textHistory(messageHistory);
        }

        form.removeEventListener("submit", submit);
        form.removeEventListener("keydown", keydown);
    }

    const titleChat = document.querySelector('.js-titleChat');

    // necessário a criação dessas funções para remover o evento após primeiro uso
    function submit(event) {
        if(chatInput.value != ''){
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

            if (chatInput.value != '' && !event.repeat) {
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
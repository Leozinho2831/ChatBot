const messageHistory = document.querySelector('.js-messageHistory');
const bgBlackHistory = document.querySelector('.js-bgBlackHistory');

const buttonHistory = document.querySelector('.js-buttonHistory');
const buttonDeleteHistory = document.querySelector('.js-deleteHistory');

function openMessageHistory(){
    messageHistory.classList.remove('hidden');
    bgBlackHistory.classList.remove('hidden');
}

buttonHistory.onclick  = () => {
    openMessageHistory();
}

function deleteHistory(){
    // deletar o storage
    nav.innerHTML = '';
    messageHistory.classList.add('hidden');
    bgBlackHistory.classList.add('hidden');
}

buttonDeleteHistory.onclick = () => {
    deleteHistory();
}

const gridContainerMenu = document.querySelector('.grid-container');

gridContainerMenu.onclick = (event) => {
    const verifyHistory = !messageHistory.contains(event.target) && event.target === bgBlackHistory;
    
    if(verifyHistory){ 
        messageHistory.classList.add('hidden');
        bgBlackHistory.classList.add('hidden');
    }
}
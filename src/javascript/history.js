const nav = document.querySelector('.js-nav');
const form = document.querySelector('.js-form');

const input = document.querySelector('.js-input');
const buttonMic = document.querySelector('.js-buttonMic');
const buttonSend = document.querySelector('.js-buttonSend');

function openMoreHistory(){
    const buttonPlus = document.querySelector('.js-buttonPlus');
    const buttonLoad = document.querySelector('.js-buttonLoad');

    const sectionPlus = document.querySelector('.js-sectionPlus');
    const sectionLoad = document.querySelector('.js-sectionLoad');

    function toggleText(element){
        const containerItens = element.previousElementSibling;
        const classRotate180 = 'rotate180'; 

        if(containerItens === buttonPlus){
            const textPlus = 'Mais';
            const textLess = 'Menos';
            
            containerItens.children[0].classList.toggle(classRotate180);

            if(buttonLoad){
                if(containerItens.children[1].textContent === textPlus){
                    containerItens.children[1].textContent = textLess;
    
                    buttonLoad.classList.remove('hidden');
                    buttonLoad.classList.add('flex');
                } else {
                    containerItens.children[1].textContent = textPlus;
    
                    buttonLoad.classList.remove('flex');
                    buttonLoad.classList.add('hidden');
                }
            }

        } else {

            const textPlus = 'Carregar Mais';
            const textLess = 'Carregar Menos';

            containerItens.children[0].classList.toggle(classRotate180);

            if(containerItens.children[1].textContent === textPlus){
                containerItens.children[1].textContent = textLess;
            } else {
                containerItens.children[1].textContent = textPlus;
            }

        }
    }

    function openHistory(element){
        if(element.classList.contains('hidden')){
            element.classList.remove('hidden');
            element.classList.add('block');
        } else {
            element.classList.remove('block');
            element.classList.add('hidden');
        }

        toggleText(element);
    }

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

// components
const historyItem = (message) => {
    return  `<div class="flex items-center gap-5 cursor-pointer hoverBg js-message">
                <div class="space-y-[2px] *:w-4 *:h-[2px] *:bg-gray-500">
                    <div></div>
                    <div></div>
                    <div class="!w-[10px]"></div>
                </div>
                <p class="flex-1 text-gray-400 text-base">${message}</p>
                <figure class="inline-flex items-center justify-center w-8 h-8 !p-0 hoverBg js-options">
                    <img src="src/images/options.svg" alt="options">
                </figure>
            </div>
            `;
}

const firstMessage = (message) => {
    return  `<b class="px-3 font-semibold text-gray-200 text-lg">Recentes</b>
            ${historyItem(message)}
            `;
}

// criar botão abrir mais histórico
const historyItemPlus = (message) => {
    return  `<div class="flex items-center gap-5 cursor-pointer hoverBg js-buttonPlus">
                <img class="w-4 h-4 js-rotate180" src="src/images/arrow-menu.svg" alt="Mais">
                <p class="text-gray-400 text-base">Mais</p>
            </div>
            <section class="hidden space-y-1 js-sectionPlus">
                ${historyItem(message)}
            </section>
            `;
}

// criar botão abrir histórico completo
const historyItemLoad = (message) => {
    return  `
            <div class="space-y-1 flex items-center gap-6 cursor-pointer hoverBg js-buttonLoad">
                <img class="ml-[6px] js-rotate90" src="src/images/options.svg" alt="Carregar mais">
                <p class="capitalize text-gray-400 text-base">Carregar Mais</p>
            </div>
            <section class="hidden space-y-1 js-sectionLoad">
                ${historyItem(message)}
            </section>
            `;
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

input.oninput = () => {
    if(input.value){
        buttonMic.classList.add('hidden');
        buttonSend.classList.remove('hidden');
    } else {
        buttonSend.classList.add('hidden');
        buttonMic.classList.remove('hidden');
    }
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
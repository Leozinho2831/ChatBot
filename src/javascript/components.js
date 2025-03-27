// components
export const historyItem = (message) => {
    return  `<div class="flex flex-1 items-center gap-5 cursor-pointer hoverBg js-message">
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

export const firstMessage = (message) => {
    return  `<b class="px-3 font-semibold text-gray-200 text-lg">Recentes</b>
            ${historyItem(message)}
            `;
}

// criar botão abrir mais histórico
export const historyItemPlus = (message) => {
    return  `<button class="w-full flex items-center gap-5 cursor-pointer hoverBg js-buttonPlus">
                <img class="w-4 h-4 js-rotate180" src="src/images/arrow-menu.svg" alt="Mais">
                <p class="text-gray-400 text-base">Mais</p>
            </button>
            <section class="hidden space-y-1 js-sectionPlus">
                ${historyItem(message)}
            </section>
            `;
}

// criar botão abrir histórico completo
export const historyItemLoad = (message) => {
    return  `
            <button class="space-y-1 w-full flex items-center gap-6 cursor-pointer hoverBg js-buttonLoad">
                <img class="ml-[6px] js-rotate90" src="src/images/options.svg" alt="Carregar mais">
                <p class="capitalize text-gray-400 text-base">Carregar Mais</p>
            </button>
            <section class="hidden space-y-1 js-sectionLoad">
                ${historyItem(message)}
            </section>
            `;
}

// open history
export function openHistory(element){
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden');
        element.classList.add('block');
    } else {
        element.classList.remove('block');
        element.classList.add('hidden');
    }
        
    const button = element.previousElementSibling;
    const classRotate180 = 'rotate180'; 

    if(button.classList.contains('js-buttonPlus')){
        const textPlus = 'Mais';
        const textLess = 'Menos';
                
        button.children[0].classList.toggle(classRotate180);
    
        if(button.children[1].textContent === textPlus){
            button.children[1].textContent = textLess;
        } else {
            button.children[1].textContent = textPlus;
        }

    } else if(button.classList.contains('js-buttonLoad')){
        const textLoadPlus = 'Carregar Mais';
        const textLoadLess = 'Carregar Menos';

        button.children[0].classList.toggle(classRotate180);

        if(button.children[1].textContent === textLoadPlus){
            button.children[1].textContent = textLoadLess;
        } else {
            button.children[1].textContent = textLoadPlus;
        }

    }  
}
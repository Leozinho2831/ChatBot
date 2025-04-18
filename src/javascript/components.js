// components
export const historyItem = () => {
    return  `<div class="flex flex-1 items-center gap-5 cursor-pointer glass js-message">
                <div class="space-y-[2px] *:w-4 *:h-[2px] *:bg-gray-500">
                    <div></div>
                    <div></div>
                    <div class="!w-[10px]"></div>
                </div>
                <p class="flex-1 text-gray-400 text-base truncate">
                
                </p>
                <figure class="inline-flex items-center justify-center w-8 h-8 !p-0 hoverBg js-options">
                    <img src="src/images/options.svg" alt="options">
                </figure>
            </div>
            `;
}

export const firstHistory = () => {
    return  `<b class="px-3 font-semibold text-gray-200 text-lg">Recentes</b>
            ${historyItem()}
            `;
}

// scroll smooth
function scroll(){
    const contentChat = document.querySelector('.js-contentChat');
    contentChat.scrollTop = contentChat.scrollHeight;
}

// typing animation
export function typing(element, text, time){
    const words = text.split('');
    
    let i = 0;
    
    function type(){
        if(i < words.length){
            element.innerHTML = text.substring(0, (i + 1));

            scroll();
            
            i++;
            setTimeout(type, time);
        }
    }

    type();
}


// mensagem IA
export const chatMessage = (inputValue) => {
    return  `
                <div class="self-end flex items-center gap-3 w-full max-w-[500px] bg-gray-800 text-gray-300 rounded-2xl rounded-tr-none py-4 px-6 shadow-[0_2px_3px_rgba(0,0,0,0.2)] max-xs:py-3 max-xs:px-5">
                    <p class="max-w-[40ch] w-full truncate text-base max-xs:text-sm">${inputValue}</p>
                    <button class="self-start min-w-fit cursor-pointer p-2 rounded-full hover:bg-gray-700/70 js-rotate180 js-openMessageUser">
                        <img class="w-5 h-5" src="src/images/arrow-menu.svg" alt="Ver mais">
                    </button>
                </div>
            `;
}

export const chatMessageIA = () => {
    return  `
                <div class="text-gray-300 js-contentIA">
                    <div class="flex items-center gap-2 *:w-2 *:h-2 *:rounded-full *:bg-gray-400 animateBounce">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="hidden flex-col gap-3">
                        <button class="self-end bg-gray-400 p-2 rounded-full cursor-pointer hover:bg-gray-500 js-buttonCopy">
                            <img class="w-5 h-5" src="src/images/copy.svg" alt="Copiar">
                        </button>
                        <p class="flex-1 text-base max-xs:text-sm js-responseIa"></p>
                    </div>
                </div>
            `;
}

// button copy
export function copyTextAI(){
    const buttonsCopy = document.querySelectorAll('.js-buttonCopy');
    const alertCopy = document.querySelector('.js-alertCopy');

    buttonsCopy.forEach((buttonCopy) => {
        buttonCopy.onclick = (event) => {
            const textCopy = buttonCopy.nextElementSibling;
            const classTextCopy = 'finishedCopy';
            // o valor menos é para fica acima do botão
            const top = event.clientY - 40;
            const right = window.innerWidth - event.clientX;

            alertCopy.style.cssText = `top: ${top}px; right: ${right}px;`;

            navigator.clipboard.writeText(textCopy.textContent)
                .then(() => {

                    alertCopy.textContent = 'Copiado com sucesso!';
                    alertCopy.classList.add(classTextCopy);

                    setTimeout(() => {
                        alertCopy.classList.remove(classTextCopy);
                    }, 1500);

                })
                .catch(() => {       

                    alertCopy.textContent = 'Não conseguimos fazer a copia';
                    alertCopy.classList.add(classTextCopy);

                    setTimeout(() => {
                        alertCopy.classList.remove(classTextCopy);
                    }, 1500);

                });
        }
    });
}
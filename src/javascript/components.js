// components
export const historyItem = (message) => {
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

export const firstMessage = (message) => {
    return  `<b class="px-3 font-semibold text-gray-200 text-lg">Recentes</b>
            ${historyItem(message)}
            `;
}

// criar botão abrir mais histórico
export const historyItemPlus = (message) => {
    return  `<button class="flex items-center gap-5 cursor-pointer hoverBg js-buttonPlus">
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
            <button class="space-y-1 flex items-center gap-6 cursor-pointer hoverBg js-buttonLoad">
                <img class="ml-[6px] js-rotate90" src="src/images/options.svg" alt="Carregar mais">
                <p class="capitalize text-gray-400 text-base">Carregar Mais</p>
            </button>
            <section class="hidden space-y-1 js-sectionLoad">
                ${historyItem(message)}
            </section>
            `;
}
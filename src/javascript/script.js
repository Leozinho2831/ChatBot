let appContent = document.querySelector('#app');

if(!appContent){
    appContent = document.createElement('div');
    appContent.id = 'app';
    document.body.appendChild(appContent);
}
    
export default function app(){
    appContent.innerHTML = 
    `
    <div class="absolute top-6 z-20 left-1 px-6 space-y-5">
        <figure class="inline-flex items-center justify-center w-12 h-12 !p-0 cursor-pointer hoverBg js-menu">
            <img src="src/images/menu.svg" alt="menu">
        </figure>
    </div>
    <div class="hidden absolute z-20 inset-0 bg-black/50 js-bgBlack"></div>
    <div class="hidden absolute z-40 left-[235px] shadow-[0_2px_4px_rgba(0,0,0,0.6)] bg-gray-900 py-[7px] rounded-xl text-gray-300 *:!rounded-none *:w-full *:h-fit *:px-4 *:!py-3 *:flex *:items-center *:gap-3 *:hoverBg *:cursor-pointer max-sm:bottom-0 max-sm:inset-x-0 max-sm:w-screen max-sm:rounded-t-xl max-sm:rounded-b-none max-sm:*:gap-5 max-sm:*:!py-5 js-menuOptions">
        <button>
            <img class="w-5 h-5 max-sm:w-7 max-sm:h-7" src="src/images/rename.svg" alt="Renomear">
            <p class="text-sm max-sm:text-lg">Renomear</p>
        </button>
        <button>
            <img class="w-5 h-5 max-sm:w-7 max-sm:h-7" src="src/images/delete.svg" alt="Excluir">
            <p class="text-sm max-sm:text-lg">Excluir</p>
        </button>
    </div>
    <div class="grid-container max-sm:!grid-cols-1">
        <header class="w-full h-screen p-[3px] py-6 bg-gray-900 max-sm:w-[70%] max-sm:absolute max-sm:z-10 max-sm:menuMobile js-containerMenu">
            <section class="grid grid-rows-[auto_minmax(200px,350px)_1fr] h-[calc(100%-110px)] gap-8 mt-24 js-sectionMenu">
                <div class="px-6">
                    <button class="uppercase font-semibold text-sm text-gray-400 bg-gray-950/60 flex items-center gap-4 px-4 py-3 rounded-full js-newConversation" disabled>
                        <img class="w-4 h-4" src="src/images/plus.svg" alt="Sinal de mais">
                        <p>Nova conversa</p>
                    </button>
                </div>
                <nav class="overflow-y-auto max-h-[350px] px-3 space-y-1 scrollable js-nav">
                        
                </nav>
                <div class="self-end px-3">
                    <figure class="flex items-center gap-4 cursor-pointer hoverBg js-buttonHistory">
                        <img class="w-5 h-5" src="src/images/history.svg" alt="Histórico">
                        <p class="text-gray-400 text-base">Atividade</p>
                    </figure>
                </div>
            </section>
        </header>
        <div class="hidden absolute z-20 inset-0 bg-black/50 js-bgBlackHistory"></div>
        <div class="hidden absolute bottom-0 inset-x-0 z-40 space-y-6 bg-gray-900 rounded-t-xl p-7 shadow-[0_2px_4px_rgba(0,0,0,0.6)] js-messageHistory">
            <h1 class="px-3 font-semibold text-gray-200 text-2xl">Você tem certeza que deseja apagar seu histórico?</h1>
            <button class="uppercase font-semibold text-sm text-gray-400 bg-gray-950/60 px-6 py-3 rounded-full hover:bg-gray-950 hover:text-red-600/90 js-deleteHistory">Apagar</button>
        </div>
        <main class="relative grid grid-rows-[1fr,auto] grid-cols-1 gap-12 h-screen bg-gray-950 py-8 px-10 max-sm:gap-8 max-sm:py-6 max-sm:px-8">
            <section class="relative justify-self-center self-center max-w-[900px] w-full max-h-[90%] h-full mt-16 py-4 px-5 flex flex-col gap-10 overflow-y-auto scroll-smooth scrollable js-contentChat">
                    <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center uppercase font-bold tracking-widest text-gray-200 text-4xl max-sm:3xl js-titleChat"></h1>
            </section>
            <p class="hidden absolute z-30 opacity-0 font-medium text-sm bg-gray-800/80 text-gray-300/80 py-2 px-4 rounded-xl shadow-[0_2px_3px_rgba(0,0,0,0.2)] js-alertCopy">A mensagem foi copiada!</p>
            <div class="self-end justify-self-center w-full max-w-[900px]">
                <form class="js-form">
                    <label for="chat" class="min-w-52 flex flex-wrap gap-3 justify-between items-center border-2 border-gray-800 bg-gray-black/60 rounded-2xl py-4 px-5 shadow-[0_2px_3px_rgba(0,0,0,0.2)] hover:bg-gray-black hover:border-gray-700 focus:outline-none focus:bg-gray-black focus:border-gray-600">
                        <input 
                            type="text"
                            id="chat" 
                            placeholder="Peça ao chatBot" 
                            class="flex-1 min-w-40 bg-transparent text-lg text-gray-500 font-semibold placeholder:font-semibold focus:outline-none placeholder:text-gray-600 js-input"
                        >
                        <button type="button" class="bg-gray-400 p-2 rounded-full cursor-pointer hover:bg-gray-500 js-buttonMic">
                            <img class="w-5 h-5" src="src/images/microphone.svg" alt="Usar o microfone">
                        </button>
                        <button type="submit" class="hidden bg-gray-400 p-2 rounded-full cursor-pointer hover:bg-gray-500 js-buttonSend">
                            <img class="w-5 h-5" src="src/images/arrow.svg" alt="Confirmar">
                        </button>
                    </label>
                </form>
            </div>
        </main>
    
        <div class="hidden absolute inset-0 z-40 bg-gray-900 p-5 js-alertAudio">
            <div class="relative flex items-center justify-center h-full">
                <figure class="absolute top-5 right-5 cursor-pointer js-closeAlert">
                    <img class="w-12 h-12" src="src/images/close.svg" alt="Fechar">
                </figure>
                <div class="flex items-center gap-12 max-sm:gap-8">
                    <h1 class="flex-1 font-bold tracking-widest text-gray-200 text-3xl max-sm:text-xl">
                        A pesquisa por voz não foi realizada. 
                        <br>
                        Permita o uso do microfone.
                    </h1>
                    <figure class="min-w-fit bg-gray-400 p-8 rounded-full max-sm:p-6">
                        <img class="min-w-[100px] min-h-[100px] max-sm:min-w-[60px] max-sm:min-h-[60px]" src="src/images/microphone.svg" alt="Microfone">
                    </figure>
                </div>
            </div>
        </div>
    </div>
    `;
}

app();
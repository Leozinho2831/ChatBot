document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.js-nav');
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

    document.addEventListener('click', (event) => {
        const menuOptions = document.querySelector('.js-menuOptions');
        const buttonDelete = menuOptions.children[1];

        const buttonOption = event.target.closest('.js-options');

        buttonDelete.onclick = () => {
            const containerHistory = buttonOption.parentElement;
            containerHistory.remove();

            // remover do storage
            if(nav.children.length === 1){
                nav.innerHTML = '';
            }
        }
        
        const verifyHistory = !messageHistory.contains(event.target) && event.target === bgBlackHistory;
        
        if(verifyHistory){ 
            messageHistory.classList.add('hidden');
            bgBlackHistory.classList.add('hidden');
        }
    });
})
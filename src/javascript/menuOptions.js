const nav = document.querySelector('.js-nav');
const menuOptions = document.querySelector('.js-menuOptions');
const bgBlack = document.querySelector('.js-bgBlack');

document.addEventListener('click', (event) => {    
    // usado para pegar o botão de clique e não precisar criar um evento de clique para ele, assim não precisando clicar duas vezes no botão
    const buttonOption = event.target.closest('.js-options');

    function openMenuOptions(event){

        // pega a distância do topo da tela visível até o lugar do evento
        const distanceTop = event.clientY - 20;
        
        if(widthScreen > 640){
            menuOptions.style.cssText = `top: ${distanceTop}px`;
        } else {
            bgBlack.classList.remove('hidden');
        }
    
        if(!menuOptions.classList.contains('hidden')){
            menuOptions.classList.add('hidden');
            bgBlack.classList.add('hidden');
        } else {
            menuOptions.classList.remove('hidden');
        }
    }

    if(buttonOption){
        openMenuOptions(event);
    }

    // functions of menu options
    const buttonRename = menuOptions.children[0];
    const buttonDelete = menuOptions.children[1];
    
    function renameHistory(textRename) {
        menuOptions.classList.add('hidden');
        bgBlack.classList.add('hidden');
    
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('toggleTextHistory');
        input.value = textRename.textContent;
    
        textRename.replaceWith(input);
        input.focus();
    
        function replaceInput() {
            // verifica se o item não está na árvore do dom
            if (!input.parentNode) return;

            textRename.textContent = input.value;
            input.replaceWith(textRename);
    
            // Remover os eventos para evitar chamadas duplicadas
            input.removeEventListener('blur', replaceInput);
            input.removeEventListener('keydown', handleKeydown);
        }
    
        function handleKeydown(event) {
            if (event.key === 'Enter') {
                // se for pelo enter remove o evento de blur
                input.removeEventListener('blur', replaceInput);
                replaceInput();
            }
        }
    
        input.addEventListener('blur', replaceInput);
        input.addEventListener('keydown', handleKeydown);
    }
    
    buttonRename.onclick = () => {
        const textRename = buttonOption.previousElementSibling;
        renameHistory(textRename);
    };
    
    
    buttonDelete.onclick = () => {
        const containerHistory = buttonOption.parentElement;
        containerHistory.remove();

        if(nav.children.length === 1){
            nav.innerHTML = '';
        }
    }

    // fechar menu option
    const verify = (!event.target.closest('.js-menuOptions') && !buttonOption) || menuOptions.children[1].contains(event.target);    
    
    if(verify){
        menuOptions.classList.add('hidden');
        bgBlack.classList.add('hidden');
    }
});
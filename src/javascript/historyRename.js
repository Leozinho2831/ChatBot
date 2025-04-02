document.addEventListener('click', (event)=> {
    const menuOptions = document.querySelector('.js-menuOptions');
    const buttonRename = menuOptions.children[0];
    
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

    const buttonOption = event.target.closest('.js-options');
    
    buttonRename.onclick = () => {
        const textRename = buttonOption.previousElementSibling;
        renameHistory(textRename);
    };
});
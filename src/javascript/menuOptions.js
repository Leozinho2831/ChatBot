const menuOptions = document.querySelector('.js-menuOptions');
const bgBlack = document.querySelector('.js-bgBlack');

document.onclick = (event) => {    
    // usado para pegar o botão de clique e não precisar criar um evento de clique para ele, assim não precisando clicar duas vezes no botão
    const buttonOption = event.target.closest('.js-options');

    function openMenuOptions(event){
        const itemEvent = event.target;

        const distanceTop = itemEvent.offsetTop - 10;
        
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
    
    function renameHistory(textRename){
        menuOptions.classList.add('hidden');
        bgBlack.classList.add('hidden');

        const input = document.createElement('input');
        input.type = 'text';
        // classe de estilo
        input.classList.add('toggleTextHistory');

        // valor atual do texto no input
        input.value = textRename.textContent;

        // substitui o texto pelo input
        textRename.replaceWith(input);

        // verifica quando o input perde focus para faze replace
        input.addEventListener('blur', () => {
            textRename.textContent = input.value;
            input.replaceWith(textRename);
        });

        // se usuário precionar enter ele faz a alteração
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                textRename.textContent = input.value;
                input.replaceWith(textRename);
            }
        });
    }
    
    function deleteItemHistory(containerHistory){
    
    }
    
    buttonRename.onclick = () => {
        const textRename = buttonOption.previousElementSibling
        console.log(textRename);
        
        renameHistory(textRename);
    }
    
    buttonDelete.onclick = () => {
        const containerHistory = buttonOption.parentElement;
        deleteItemHistory(containerHistory);
    }

    // fechar menu option
    const verify = (!menuOptions.contains(event.target) && !event.target.closest('.js-options')) || event.target === bgBlack;
    
    if(verify){      
        menuOptions.classList.add('hidden');
        bgBlack.classList.add('hidden');
    }
}
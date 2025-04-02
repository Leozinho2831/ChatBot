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

    // fechar menu option
    const verify = (!event.target.closest('.js-menuOptions') && !buttonOption) || menuOptions.children[1].contains(event.target);    
    
    if(verify){
        menuOptions.classList.add('hidden');
        bgBlack.classList.add('hidden');
    }
});
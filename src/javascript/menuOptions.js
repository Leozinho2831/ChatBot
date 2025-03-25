document.onclick = (event) => {
    const menuOptions = document.querySelector('.js-menuOptions');
    // usado para pegar o botão de clique e não precisar criar um evento de clique para ele, assim não precisando clicar duas vezes no botão
    const buttonOption = event.target.closest('.js-options');

    function openMenuOptions(event){
        const itemEvent = event.currentTarget;
        const distanceTop = itemEvent.offsetTop;
        
        menuOptions.style.cssText = `top: ${distanceTop}px`;
    
        if(!menuOptions.classList.contains('hidden')){
            menuOptions.classList.add('hidden');
        } else {
            menuOptions.classList.remove('hidden');
        }
    }

    if(buttonOption){
        openMenuOptions(event);
    }

    const verify = menuOptions && !menuOptions.contains(event.target) && !event.target.closest('.js-options');

    if(verify){
        menuOptions.classList.add('hidden');
    }
}
document.onclick = (event) => {
    const menuOptions = document.querySelector('.js-menuOptions');
    const buttonsOptions = document.querySelectorAll('.js-options');
    console.log(menuOptions, buttonsOptions);

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
    
    buttonsOptions.forEach((buttonOptions) => {
        buttonOptions.onclick = (event) => {
            console.log(1);
            openMenuOptions(event);
        }
    }); 

    const verify = menuOptions && !menuOptions.contains(event.target) && !event.target.closest('.js-options');

    if(verify){
        menuOptions.classList.add('hidden');
    }
}
// menu nav
const menu = document.querySelector('.js-menu');
const gridContainer = document.querySelector('.grid-container');
const sectionMenu = document.querySelector('.js-sectionMenu');

const classOpenMenu = 'open-menu';
const widthScreen = document.body.clientWidth;

if(widthScreen > 640){
    gridContainer.classList.add(classOpenMenu);
} else {
    gridContainer.classList.remove(classOpenMenu);
    
    sectionMenu.classList.remove('grid');
    sectionMenu.classList.add('hidden');
}

menu.onclick = () => {
    gridContainer.classList.toggle(classOpenMenu);

    if(gridContainer.classList.contains(classOpenMenu)){
        sectionMenu.classList.add('grid');
        sectionMenu.classList.remove('hidden');
    } else {
        sectionMenu.classList.remove('grid');
        sectionMenu.classList.add('hidden');
    }
}

// menu options. Tudo dentro do document.onclick para quando criar os itens selecionar o item e salva na memória
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

    if(menuOptions){
        const verify = menuOptions && !menuOptions.contains(event.target) && !event.target.closest('.js-options');

        if(verify){
            menuOptions.classList.add('hidden');
        }
    }
}
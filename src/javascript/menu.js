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

menu.onclick = (event) => {
    // evita que o evento de click no menu dispare o evento de click no documento
    event.stopPropagation();

    gridContainer.classList.toggle(classOpenMenu);

    if(gridContainer.classList.contains(classOpenMenu)){
        sectionMenu.classList.add('grid');
        sectionMenu.classList.remove('hidden');
    } else {
        sectionMenu.classList.remove('grid');
        sectionMenu.classList.add('hidden');
    }
}

// menu close mobile
document.body.onclick = (event) => {
    if(widthScreen < 640){
        const menuNav = document.querySelector('.js-containerMenu');
        const bgBlack = document.querySelector('.js-bgBlack');

        const verifyMenuMobile = !menuNav.contains(event.target) && !menu.contains(event.target);
        
        if(verifyMenuMobile){
            gridContainer.classList.remove(classOpenMenu);

            sectionMenu.classList.remove('grid');
            sectionMenu.classList.add('hidden');
        }
    }
}
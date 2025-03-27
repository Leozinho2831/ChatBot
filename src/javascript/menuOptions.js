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

    const verify = (!menuOptions.contains(event.target) && !event.target.closest('.js-options')) || event.target === bgBlack;
    
    if(verify){      
        menuOptions.classList.add('hidden');
        bgBlack.classList.add('hidden');
    }
}

const buttonRename = menuOptions.children[0];
const buttonDelete = menuOptions.children[1];

function renameHistory(){

}

function deleteItemHistory(){

}

buttonRename.onclick = (event) => {

}

buttonDelete.onclick = (event) => {

}
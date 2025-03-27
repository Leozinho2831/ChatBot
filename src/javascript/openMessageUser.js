const openMessages = document.querySelectorAll('.js-openMessageUser');

openMessages.forEach((openMessage) =>{
    openMessage.onclick = () => {
        const classRotate180 = 'rotate180';
        openMessage.classList.toggle(classRotate180);
    
        const text = openMessage.previousElementSibling

        text.classList.toggle('truncate');
    }
});
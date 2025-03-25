const alertAudio = document.querySelector('.js-alertAudio');
const buttonMic = document.querySelector('.js-buttonMic');

function audioClient(){
    navigator
        .mediaDevices
        .getUserMedia
        .then( (stream) => {

        }, (error) => {
            alertAudio.classList.remove('hidden');
        });
}

buttonMic.onclick = () => {
    audioClient();
}

const closeAlert = document.querySelector('.js-closeAlert');

closeAlert.onclick = () => {
    alertAudio.classList.add('hidden');
}
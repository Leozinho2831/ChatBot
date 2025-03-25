const alertAudio = document.querySelector('.js-alertAudio');

function audioClient(){
    navigator
        .mediaDevices
        .getUserMedia
        .then( (stream) => {

        }, (error) => {
            // alertAudio.classList.remove('hidden');
        });
}
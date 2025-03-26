const alertAudio = document.querySelector('.js-alertAudio');
const inputChat = document.querySelector('.js-input');
const micButton = document.querySelector('.js-buttonMic');
const sendButton = document.querySelector('.js-buttonSend');

// Web Speech API do navegador
function audioClient(){
    // reconhecimento de voz
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = navigator.language;

    // Pega resultado final apenas, nada do navegador tentar deduzir o que será dito
    recognition.interimResults = false;

    // somente a melhor alternative será pega
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        // pega texto reconhecido
        const transcript = event.results[0][0].transcript;
        
        inputChat.value = transcript;

        if(micButton && sendButton){
            micButton.classList.add('hidden');
            sendButton.classList.remove('hidden');
        }
    }
    // caso der erro
    recognition.onerror = (event) => {
        alertAudio.classList.remove('hidden');
    };

    recognition.start();
}

micButton.onclick = (event) => {
    event.preventDefault();
    audioClient();
}

const closeAlert = document.querySelector('.js-closeAlert');

closeAlert.onclick = () => {
    alertAudio.classList.add('hidden');
}
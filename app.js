let speech = new SpeechSynthesisUtterance();
let speechBtn = document.querySelector('.Btn');
let textArea = document.querySelector('.text-area');
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach( (voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]
});

speechBtn.addEventListener("click", ()=> {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});
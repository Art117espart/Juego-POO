const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
    ctx.canvas.width=0;
    ctx.canvas.height=0;

    const bodyParts = [
        [4,2,1,1],
        [4,3,1,2],
        [3,5,1,1],
        [5,5,1,1],
        [3,3,1,1],
        [5,3,1,1]
    ];
    let selectedWord;
    let usedLetters;
    let mistakes;
    let hist;

const drawWord = () =>{
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add('latter');
        letterElement.classList.add('hidden');
        wordContainer.appendChild(letterElement);
    });
}

const selectpalabraRandom = () => {
    let word = words[Math.floor((math.random() * words.length))].toUpperCase();
    selectedWord = word.split('');
}
const ahorcado = ()=>{
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20,20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.filRect(0,7,4,1);
    ctx.filRect(1,0,1,8);
    ctx.filRect(2,0,3,1);
    ctx.filRect(4,1,1,1);
};

    const iniciar_juego = () =>{
        usedLetters = [];
        mistakes = 0;
        hist = 0;
        wordContainer.innerHTML = '';
        usedLettersElement.innerHTML = '';
        startButton.style.display = 'none';
        ahorcado();
        selectpalabraRandom();
        selectedWord();
        
    };
    startButton.addEventListener('click',iniciar_juego);
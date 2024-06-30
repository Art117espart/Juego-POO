document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('soloButton').addEventListener('click', function() {
        startGame('solo');
    });

    document.getElementById('groupButton').addEventListener('click', function() {
        startGame('group');
    });

    document.getElementById('startButton').addEventListener('click', function() {
        iniciarjuego();
    });

    document.getElementById('randomWordButton').addEventListener('click', function() {
        setRandomWord();
    });

    document.getElementById('useCustomWordButton').addEventListener('click', function() {
        setCustomWord();
    });
});

const words = [
    "algoritmo", "aplicación", "arquitectura", "base de datos", "bit", "byte", "caché", "compilador", "computadora", 
    "código", "ciberseguridad", "clase", "cliente", "cloud", "cluster", "compilación", "concurrencia", "conexión", 
    "constante", "criptografía", "datos", "debugging", "desarrollador", "devops", "disco duro", "dominio", "ensamblador", 
    "entorno", "escalabilidad", "esquema", "estructura", "función", "framework", "gateway", "hardware", "hilo", 
    "hosting", "informática", "ingeniería", "inteligencia artificial", "interfaz", "internet", "intranet", "librería", 
    "linguaje de programación", "mantenimiento", "memoria", "modelo", "monitor", "navegador", "nube", "operador", 
    "optimización", "paquete", "paralelismo", "parámetro", "plataforma", "proceso", "programa", "programador", 
    "protocolo", "query", "red", "rendimiento", "repositorio", "resolución", "router", "script", "seguridad", "semáforo", 
    "servidor", "sistema", "software", "solución", "synchronous", "sintaxis", "tabla", "tecnología", "terminal", 
    "thread", "token", "usuario", "variable", "virtualización", "web", "wifi", "XML", "API", "backend", "frontend", 
    "full stack", "JSON", "NoSQL", "ORM", "REST", "SOAP", "SQL"
];

let gameMode;
let selectedWord;

function startGame(mode) {
    gameMode = mode;
    document.getElementById('modeSelection').style.display = 'none';
    if (mode === 'solo') {
        selectedWord = getRandomWord();
        document.getElementById('startButton').style.display = 'block';
    } else if (mode === 'group') {
        document.getElementById('groupInput').style.display = 'block';
    }
    console.log(`Modo de juego seleccionado: ${mode}`);
}

function iniciarjuego() {
    console.log(`Iniciando el juego en modo: ${gameMode} con la palabra: ${selectedWord}`);
    // Aquí va la lógica para iniciar el juego dependiendo del modo.
    const wordContainer = document.getElementById('wordContainer');
    const startButton = document.getElementById('startButton');
    const usedLetter = document.getElementById('usedLetters');

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

const drawHangMan = ( )=>{
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20,20);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#7777h';
};

    const startGame = () =>{
        usedLetter = [];
        mistakes = 0
        hist = 0
        wordContainer.innerHTML = '';
        usedLettersElements.innerHTML = '';
        startButton.style.display = 'none';

    }
    // Puedes agregar más lógica aquí para iniciar el juego.
    if (gameMode === 'solo') {
        // Lógica para un solo jugador.
    } else if (gameMode === 'group') {
        // Lógica para múltiples jugadores.
    }
}

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function setRandomWord() {
    selectedWord = getRandomWord();
    document.getElementById('groupInput').style.display = 'none';
    document.getElementById('startButton').style.display = 'block';
    console.log(`Palabra aleatoria seleccionada: ${selectedWord}`);
}

function setCustomWord() {
    const customWord = document.getElementById('customWord').value.trim();
    if (customWord) {
        selectedWord = customWord;
        document.getElementById('groupInput').style.display = 'none';
        document.getElementById('startButton').style.display = 'block';
        console.log(`Palabra personalizada ingresada: ${selectedWord}`);
    } else {
        alert('Por favor, ingresa una palabra.');
    }
}

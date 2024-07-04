const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const individualButton = document.getElementById('individualButton');
const grupoButton = document.getElementById('grupoButton');
const usedLettersElement = document.getElementById('usedLetters');

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 120;
ctx.canvas.height = 160;
ctx.scale(20, 20);

const bodyParts = [
    [4, 2, 1, 1],
    [4, 3, 1, 2],
    [3, 5, 1, 1],
    [5, 5, 1, 1],
    [3, 3, 1, 1],
    [5, 3, 1, 1]
];

// Lista de palabras para el juego individual
const palabrasIndividuales = ["algoritmo", "aplicación", "arquitectura", "base de datos", "bit", "byte", "caché", "compilador", "computadora", 
    "código", "ciberseguridad", "clase", "cliente", "cloud", "cluster", "compilación", "concurrencia", "conexión", 
    "constante", "criptografía", "datos", "debugging", "desarrollador", "devops", "disco duro", "dominio", "ensamblador", 
    "entorno", "escalabilidad", "esquema", "estructura", "función", "framework", "gateway", "hardware", "hilo", 
    "hosting", "informática", "ingeniería", "inteligencia artificial", "interfaz", "internet", "intranet", "librería", 
    "linguaje de programación", "mantenimiento", "memoria", "modelo", "monitor", "navegador", "nube", "operador", 
    "optimización", "paquete", "paralelismo", "parámetro", "plataforma", "proceso", "programa", "programador", 
    "protocolo", "query", "red", "rendimiento", "repositorio", "resolución", "router", "script", "seguridad", "semáforo", 
    "servidor", "sistema", "software", "solución", "synchronous", "sintaxis", "tabla", "tecnología", "terminal", 
    "thread", "token", "usuario", "variable", "virtualización", "web", "wifi", "XML", "API", "backend", "frontend", 
    "full stack", "JSON", "NoSQL", "ORM", "REST", "SOAP", "SQL"];

let palabraSeleccionada;
let letrasUsadas;
let errores;

const dibujarPalabra = () => {
    wordContainer.innerHTML = '';
    palabraSeleccionada.forEach(letra => {
        const elementoLetra = document.createElement('span');
        elementoLetra.textContent = letra.toUpperCase();
        elementoLetra.classList.add('letra');
        elementoLetra.classList.add('oculto');
        wordContainer.appendChild(elementoLetra);
    });
}

const seleccionarPalabraAleatoria = () => {
    palabraSeleccionada = palabrasIndividuales[Math.floor(Math.random() * palabrasIndividuales.length)].toUpperCase().split('');
}

const dibujarAhorcado = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    bodyParts.slice(0, errores).forEach(parte => {
        ctx.fillRect(parte[0], parte[1], parte[2], parte[3]);
    });
};

const iniciarJuegoIndividual = () => {
    letrasUsadas = [];
    errores = 0;
    dibujarAhorcado();
    seleccionarPalabraAleatoria();
    dibujarPalabra();
    ocultarModoJuego();
}

const iniciarJuegoGrupo = (palabra) => {
    letrasUsadas = [];
    errores = 0;
    palabraSeleccionada = palabra.toUpperCase().split('');
    dibujarAhorcado();
    dibujarPalabra();
    ocultarModoJuego();
}

const verificarLetra = (letra) => {
    if (letrasUsadas.includes(letra)) {
        return; // Letra ya usada
    }
    letrasUsadas.push(letra);
    usedLettersElement.textContent = letrasUsadas.join(', ');

    if (!palabraSeleccionada.includes(letra)) {
        errores++;
        dibujarAhorcado();
    }

    // Verificar fin del juego
    if (errores >= bodyParts.length) {
        alert('¡Game Over! Perdiste.');
        reiniciarJuego();
    } else {
        // Verificar si se adivinaron todas las letras
        let todasAdivinadas = palabraSeleccionada.every(l => letrasUsadas.includes(l));
        if (todasAdivinadas) {
            alert('¡Felicidades! ¡Ganaste!');
            reiniciarJuego();
        }
    }

    // Actualizar palabra mostrada
    palabraSeleccionada.forEach((letraPalabra, indice) => {
        let elementoLetra = wordContainer.children[indice];
        if (letrasUsadas.includes(letraPalabra)) {
            elementoLetra.classList.remove('oculto');
        }
    });
};

startButton.addEventListener('click', () => {
    document.querySelector('.modo-juego').style.display = 'block';
});

individualButton.addEventListener('click', () => {
    iniciarJuegoIndividual();
});

grupoButton.addEventListener('click', () => {
    const palabra = prompt('Ingresa una palabra para jugar en grupo:');
    if (palabra) {
        iniciarJuegoGrupo(palabra);
    }
});

function ocultarModoJuego() {
    document.querySelector('.modo-juego').style.display = 'none';
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessBtn').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    let message = '';

    if (userGuess === randomNumber) {
        message = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
    } else if (userGuess > randomNumber) {
        message = 'El número es menor. Intenta de nuevo.';
    } else {
        message = 'El número es mayor. Intenta de nuevo.';
    }

    document.getElementById('result').textContent = message;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
});

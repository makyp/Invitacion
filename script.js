document.getElementById('btnNo').addEventListener('click', function() {
    
    var randomX = Math.floor(Math.random() * (window.innerWidth - 150)); 
    var randomY = Math.floor(Math.random() * (window.innerHeight - 50)); 
    
    // Establecer la posición aleatoria del botón
    this.style.position = 'absolute';
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';

    // Array de mensajes aleatorios para molestarte
    var messages = [
        "¿Por qué no quieres ir? ¿Ya no me quieres?",
        "¿Me vas a abandonar?",
        "¿No te gusta ir a ver peli conmigo?",
        "¿Prefieres ver la pelicula en PelisPlus?",
        "¿Es por que soy yo?",
        "¿Tienes otros planes?",
        "¿Es por que vamos a ir en bus ?",
        "¿Mejor vendeme y comprate un conejo?",
        "¿No quieres salir conmigo?"
    ];

    // Seleccionar un mensaje aleatorio
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Crear elemento de mensaje
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = randomMessage;

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(messageElement);

    // Ocultar el mensaje después de 5 segundos
    setTimeout(function() {
        messageElement.style.display = 'none';
    }, 3000);
});
// Crear corazones animados
function createHearts() {
    var container = document.querySelector('.hearts');
    for (var i = 0; i < 5; i++) {
        var heart = document.createElement('div');
        heart.classList.add('heart');
        var randomX = Math.floor(Math.random() * window.innerWidth);
        var randomDelay = Math.random() * 5; // Retraso aleatorio para cada corazón
        heart.style.left = randomX + 'px';
        heart.style.animationDelay = randomDelay + 's';
        container.appendChild(heart);
    }
}

document.getElementById('btnSi').addEventListener('click', function() {
    // Redirigir a una nueva página
    window.location.href = 'acepto.html';
});

// Llamar a la función para crear corazones cuando se cargue la página
window.addEventListener('load', createHearts);

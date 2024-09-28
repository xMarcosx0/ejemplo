// Mostrar la tabla solo cuando se selecciona la opción 3
const showOption = option => {
    document.getElementById('option1').style.display = 'none';
    document.getElementById('option2').style.display = 'none';
    document.getElementById('option3').style.display = 'none';

    if (option === 1) {
        document.getElementById('option1').style.display = 'block';
    } else if (option === 2) {
        document.getElementById('option2').style.display = 'block';
    } else if (option === 3) {
        document.getElementById('option3').style.display = 'block';
        cargarEventos(); // Cargar eventos cuando se muestra la opción 3
    }
};

// Cargar información del JSON y mostrar en la tabla
const cargarEventos = () => {
    fetch('../JSON/eventos.json') // Ruta hacia el archivo JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const tabla = document.getElementById('eventosTabla').getElementsByTagName('tbody')[0];
            tabla.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos
            data.forEach(evento => {
                const fila = tabla.insertRow();
                fila.innerHTML = `
                    <td>${evento.evento}</td>
                    <td>${evento.fecha}</td>
                    <td>${evento.ubicacion}</td>
                    <td>${evento.descripcion}</td>
                `;
            });
        })
        .catch(error => console.error('Error cargando el archivo JSON:', error));
};

const checkLogin = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        window.location.href = 'index.html';
    } else {
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent = `Bienvenid@, ${loggedInUser.username}`;
    }
};


checkLogin();

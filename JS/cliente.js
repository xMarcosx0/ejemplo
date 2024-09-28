(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        window.location.href = 'index.html';
    } else {
        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.textContent = `Bienvenid@, ${loggedInUser.username}`;
    }
})();

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
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetch('../JSON/plants.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#plantsTable tbody');
            tableBody.innerHTML = '';
            data.forEach(plant => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${plant.nombre}</td>
                    <td>${plant.color}</td>
                    <td>$${plant.precio.toFixed(2)}</td>
                `;
                tableBody.appendChild(row);
            });
        });
});

document.querySelector('[onclick="showOption(2)"]').addEventListener('click', () => {
    fetch('../JSON/plants.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#plantsTable tbody');
            tableBody.innerHTML = '';
            data.forEach(plant => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${plant.nombre}</td>
                    <td>${plant.color}</td>
                    <td>$${plant.precio.toFixed(2)}</td>
                `;
                tableBody.appendChild(row);
            });
        });
});
const cargarProductos = () => {
    fetch('../JSON/flores.json')

        .then(respuesta => respuesta.json())
        .then(productos => {
            const contenedorProductos = document.getElementById('productos');
            console.log('contenedorProductos:', contenedorProductos);
            contenedorProductos.innerHTML = ''; 

            productos.flores.forEach(producto => {
                const col = document.createElement('div');
                col.innerHTML = `
                 <div class="img-fluid">
                 <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}">
                </div>
                <div class="info">
                    <ul>
                        <li>Nombre: ${producto.nombre}</li>
                        <li>Color: ${producto.color}</li>
                        <li>Precio: ${producto.precio}</li>
                        <li>Disponibles: ${producto.stock}</li>
                    </ul>
                </div>
        `;
                contenedorProductos.appendChild(col);
            });
        })
        .catch(error => console.log('Hubo un error: ' + error.message));
}


document.querySelector('button').addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
});
document.addEventListener('DOMContentLoaded', function () {
    cargarProductos();
});
var form = document.getElementById("contactForm");
const formulario = (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const phone = document.getElementById("phone").value.trim()
    const select = document.getElementById("category").value.trim()
    const radio = document.getElementById("contacto").value.trim()
    const txtarea = document.getElementById("message").value.trim()
    if (name === "" || email === "" || phone === "" || select === "" || radio === "" || txtarea === "" ) {
        alert("Todos los campos deben ser completados ")
    } else {
        let datos = {
            nombre: name,
            correo: email,
            telefono: phone,
            categoria: select,
            contacto: radio,
            mensaje: txtarea,

        }
        localStorage.setItem("info", JSON.stringify(datos))
        console.log(localStorage.setItem("info", JSON.stringify(datos)))
        alert("Datos enviados")
        form.reset();
        let info = JSON.parse(localStorage.getItem("info"))
        console.log(info)
        let campodato = document.getElementById("datos")
        campodato.innerHTML = `
        <div>
            DATOS DEL FORMULARIO:
            Nombre:${info.nombre}<br>
            Correo:${info.correo}<br>
            Telefono:${info.telefono}<br>
            Categoria:${info.categoria}<br>
            Contacto:${info.contacto}<br>
            Mensaje:${info.mensaje}<br>
        <div/>

        `
    }

}

form.addEventListener("submit", formulario)


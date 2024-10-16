document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const authButton = document.getElementById('authButton');
    const closeDetails = document.getElementById('closeDetails');
    const buyButton = document.getElementById('buyButton');
    const itemDetails = document.getElementById('itemDetails');
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Datos de los productos
    const products = {
        1: {
            title: 'Pastel',
            price: '70bs',
            description: 'Un delicioso pastel disponible para entrega en 2 días.',
            image: 'Pastel.jpg',
            chatLink: 'https://chat-con-vendedor.com/pastel'
        },
        2: {
            title: 'Servicios de Programación',
            price: '$500',
            description: 'Informatica-Porgramación.',
            image: 'informatica.jpg',
            chatLink: 'https://chat-con-vendedor.com/programacion'
        },
        3: {
            title: 'Vestido',
            price: '45bs',
            description: 'Vestido hecho a mano, perfecto para cualquier ocasión.',
            image: 'Vestido.jpg',
            chatLink: 'https://chat-con-vendedor.com/vestido'
        }
    };

    // Mostrar pestaña activa
    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(tabId).style.display = 'block';
        });
    });

    // Mostrar el formulario de login
    authButton.addEventListener('click', function () {
        loginContainer.style.display = 'block';
        tabContents.forEach(content => content.style.display = 'none');
    });

    // Proceso de login básico
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Franz Tamayo' && password === '1234') {
            authButton.textContent = 'Vender';
            loginContainer.style.display = 'none';
            document.getElementById('productos').style.display = 'block';
        } else {
            document.getElementById('loginError').textContent = 'Credenciales incorrectas';
        }
    });

    // Mostrar detalles del producto
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const product = products[productId];
            document.getElementById('itemTitle').textContent = product.title;
            document.getElementById('itemPrice').textContent = product.price;
            document.getElementById('itemDescription').textContent = product.description;
            document.getElementById('itemImage').src = product.image;
            itemDetails.style.display = 'block';

            // Redirigir a chat cuando se presiona "Comprar"
            buyButton.addEventListener('click', function () {
                window.location.href = product.chatLink;
            });
        });
    });

    // Cerrar los detalles del producto
    closeDetails.addEventListener('click', function () {
        itemDetails.style.display = 'none';
    });
});

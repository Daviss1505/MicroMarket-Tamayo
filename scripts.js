// Tab navigation
document.querySelectorAll('.tab-link').forEach(function(tabLink) {
    tabLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetTab = this.getAttribute('data-tab');

        document.querySelectorAll('.tab-content').forEach(function(content) {
            content.style.display = 'none';
        });

        document.getElementById(targetTab).style.display = 'block';
    });
});

// Auth button functionality
document.getElementById('authButton').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
});

document.getElementById('backLoginButton').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none';
});

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Franz Tamayo' && password === '1234') {
        alert('Inicio de sesión exitoso');
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('authButton').style.display = 'none';
        document.getElementById('sellButton').style.display = 'inline-block';
    } else {
        document.getElementById('loginError').innerText = 'Credenciales incorrectas, intenta nuevamente.';
    }
});

// Mostrar detalles del producto
document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('click', function() {
        const title = this.querySelector('p:nth-child(3)').innerText;
        const price = this.querySelector('strong').innerText;
        const description = this.querySelector('p:nth-child(4)').innerText;
        const imgSrc = this.querySelector('img').getAttribute('src');
        const whatsappLink = this.getAttribute('data-whatsapp'); // Obtener el link de WhatsApp específico

        document.getElementById('itemTitle').innerText = title;
        document.getElementById('itemPrice').innerText = price;
        document.getElementById('itemDescription').innerText = description;
        document.getElementById('itemImage').setAttribute('src', imgSrc);

        document.getElementById('buyButton').setAttribute('data-whatsapp', whatsappLink); // Asignar el link de WhatsApp

        document.getElementById('itemDetails').style.display = 'block';
    });
});

// Redirigir a WhatsApp cuando se haga clic en "Comprar"
document.getElementById('buyButton').addEventListener('click', function() {
    const whatsappLink = this.getAttribute('data-whatsapp');
    window.open(whatsappLink, '_blank'); // Abrir el enlace de WhatsApp en una nueva ventana
});

// Cerrar detalles del producto
document.getElementById('closeDetails').addEventListener('click', function() {
    document.getElementById('itemDetails').style.display = 'none';
});

// Sell product functionality
document.getElementById('sellButton').addEventListener('click', function() {
    document.getElementById('sellProductContainer').style.display = 'block';
});

document.getElementById('postProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Producto publicado con éxito!');
    document.getElementById('sellProductContainer').style.display = 'none';
});

document.getElementById('cancelSaleButton').addEventListener('click', function() {
    document.getElementById('sellProductContainer').style.display = 'none';
});

document.getElementById('backSellButton').addEventListener('click', function() {
    document.getElementById('sellProductContainer').style.display = 'none';
});

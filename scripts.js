document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('loginContainer');
    const authButton = document.getElementById('authButton');
    const closeDetails = document.getElementById('closeDetails');
    const buyButton = document.getElementById('buyButton');
    const itemDetails = document.getElementById('itemDetails');
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const postProductForm = document.getElementById('postProductForm');
    const sellProductContainer = document.getElementById('sellProductContainer');
    const backLoginButton = document.getElementById('backLoginButton');
    const backSellButton = document.getElementById('backSellButton');

    const products = {
        1: { title: 'Pastel', price: '70bs', description: 'Un delicioso pastel disponible para entrega en 2 días.', image: 'Pastel.jpg' },
        2: { title: 'Servicios de Programación', price: '50bs', description: 'Informática-Programación.', image: 'informatica.jpg' },
        3: { title: 'Vestido', price: '45bs', description: 'Vestido hecho a mano, perfecto para cualquier ocasión.', image: 'Vestido.jpg' }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            tabContents.forEach(content => content.style.display = 'none');
            document.getElementById(tabId).style.display = 'block';
        });
    });

    authButton.addEventListener('click', function () {
        loginContainer.style.display = 'block';
    });

    backLoginButton.addEventListener('click', function () {
        loginContainer.style.display = 'none';
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === "Franz Tamayo" && password === "1234") {
            authButton.style.display = 'none';
            const sellButton = document.createElement('button');
            sellButton.textContent = 'Vender';
            sellButton.addEventListener('click', function () {
                sellProductContainer.style.display = 'block';
                document.getElementById('productos').style.display = 'none';
            });
            document.querySelector('.header-container').appendChild(sellButton);
            loginContainer.style.display = 'none';
        } else {
            document.getElementById('loginError').textContent = 'Credenciales incorrectas';
        }
    });

    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const product = products[productId];
            document.getElementById('itemTitle').textContent = product.title;
            document.getElementById('itemPrice').textContent = product.price;
            document.getElementById('itemDescription').textContent = product.description;
            document.getElementById('itemImage').src = product.image;
            itemDetails.style.display = 'block';
        });
    });

    closeDetails.addEventListener('click', function () {
        itemDetails.style.display = 'none';
    });

    buyButton.addEventListener('click', function () {
        window.location.href = 'https://chat-con-vendedor.com';
    });

    postProductForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('productTitle').value;
        const price = document.getElementById('productPrice').value;
        const description = document.getElementById('productDescription').value;
        const category = document.getElementById('productCategory').value;
        const imageURL = URL.createObjectURL(document.getElementById('productImage').files[0]);

        const newProductHTML = `
            <div class="item ${category}" data-id="new">
                <img src="${imageURL}" alt="${title}">
                <strong>${price}bs</strong>
                <p>${title}</p>
                <p>${description}</p>
            </div>
        `;
        document.querySelector('.item-grid').innerHTML += newProductHTML;
        alert('Producto publicado con éxito.');
        postProductForm.reset();
        sellProductContainer.style.display = 'none';
        document.getElementById('productos').style.display = 'block';
    });

    document.getElementById('cancelSaleButton').addEventListener('click', function () {
        postProductForm.reset();
        sellProductContainer.style.display = 'none';
        document.getElementById('productos').style.display = 'block';
    });

    backSellButton.addEventListener('click', function () {
        sellProductContainer.style.display = 'none';
        document.getElementById('productos').style.display = 'block';
    });
});

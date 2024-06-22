document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.produto button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('R$ ', '').replace(',', '.'));

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            cart.push({ name: productName, price: productPrice });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Produto adicionado ao carrinho!');
            document.addEventListener('DOMContentLoaded', function() {
                const categoriasIcon = document.getElementById('categorias-icon');
                const categoriasMenu = document.getElementById('categorias');
            
                categoriasIcon.addEventListener('click', function(event) {
                    event.preventDefault();
                    categoriasMenu.style.display = categoriasMenu.style.display === 'block' ? 'none' : 'block';

                    let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    // Adiciona o item ao carrinho
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    const carrinhoTotal = document.getElementById('carrinho-total');
    const carrinhoCount = document.getElementById('carrinho-count');
    
    // Limpa a lista do carrinho
    carrinhoLista.innerHTML = '';

    // Atualiza a contagem do carrinho
    carrinhoCount.textContent = carrinho.length;

    // Calcula o total
    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(li);
        total += item.preco;
    });

    // Atualiza o total do carrinho
    carrinhoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

document.getElementById('finalizar-compra').addEventListener('click', function() {
    alert('Compra finalizada!');
    carrinho = [];
    atualizarCarrinho();

    function adicionarAoCarrinho(nome, preco) {
        const quantidade = document.getElementById('quantidade').value;
        const produto = { nome, preco, quantidade: parseInt(quantidade) };
    
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
        alert('Produto adicionado ao carrinho!');
    }
    
    function atualizarCarrinho() {
        const carrinhoLista = document.getElementById('carrinho-lista');
        const carrinhoTotal = document.getElementById('carrinho-total');
    
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinhoLista.innerHTML = '';
        let total = 0;
    
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} x ${item.quantidade}`;
            carrinhoLista.appendChild(li);
            total += item.preco * item.quantidade;
        });
    
        carrinhoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
    
    document.getElementById('finalizar-compra').addEventListener('click', function() {
        alert('Compra finalizada!');
        localStorage.removeItem('carrinho');
        atualizarCarrinho();
    });
    
    // Atualiza o carrinho na página do carrinho
    if (document.getElementById('carrinho-lista')) {
        atualizarCarrinho();
    }
    
    document.getElementById('categorias-icon').addEventListener('mouseover', function() {
        document.getElementById('categorias').style.display = 'block';
    });
    
    document.getElementById('categorias-icon').addEventListener('mouseout', function() {
        document.getElementById('categorias').style.display = 'none';
    });
    // scripts.js

// Função para obter a quantidade de itens no carrinho do localStorage
function getCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.length;
}

// Atualiza o contador de itens no carrinho
function updateCartCounter() {
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
        cartCounter.textContent = getCartCount();
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    searchIcon.addEventListener('click', function () {
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'flex';
        } else {
            searchBar.style.display = 'none';
        }
    });
});

// Adiciona um item ao carrinho
function addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ /* informações do produto */ });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter(); // Atualiza o contador do carrinho
}

document.addEventListener('DOMContentLoaded', function () {
    const categoriasIcon = document.getElementById('categorias-icon');
    const categorias = document.getElementById('categorias');

    categoriasIcon.addEventListener('click', function (event) {
        event.preventDefault();
        categorias.classList.toggle('show');
    });

    // Fecha o menu de categorias ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (!categorias.contains(event.target) && !categoriasIcon.contains(event.target)) {
            categorias.classList.remove('show');
        }
    });
});


// Chamada inicial para atualizar o contador do carrinho quando a página carrega
updateCartCounter();

});

                });
            });
            
        });
    });
});

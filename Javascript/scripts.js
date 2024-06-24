// Produtos fictícios
const products = [
    { id: 1, name: 'Teclado Gamer Redragon', price: 180.00, image:'img/61M6S63ArvL.webp' },
    { id: 2, name: 'Produto 2', price: 75.00, image: 'Gestão-de-vendas-online/Site-Vendas-Oline/VarianTech-Projeti/img/Mouse logitech.webp' },
    { id: 3, name: 'Produto 3', price: 110.00, image: 'img/produto3.jpg' }
];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
    const quantidade = parseInt(document.getElementById('quantidade').value);

    let carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica se o item já está no carrinho
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({ nome, preco, quantidade, imagem });
    }

    localStorage.setItem('cart', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
    atualizarCarrinho();
}

// Remove um produto do carrinho
function removerDoCarrinho(nome) {
    let carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    carrinho = carrinho.filter(item => item.nome !== nome);

    localStorage.setItem('cart', JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Atualiza a interface do carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho-lista');
    const carrinhoTotal = document.getElementById('carrinho-total');
    let carrinho = JSON.parse(localStorage.getItem('cart')) || [];
    
    carrinhoLista.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');

        // Imagem do produto
        const img = document.createElement('img');
        img.src = item.imagem;
        img.alt = item.nome;
        img.classList.add('cart-item-image');
        li.appendChild(img);

        // Nome do produto
        const nomeProduto = document.createElement('span');
        nomeProduto.textContent = item.nome;
        li.appendChild(nomeProduto);

        // Preço e quantidade
        const precoQuantidade = document.createElement('span');
        precoQuantidade.textContent = ` - R$ ${item.preco.toFixed(2).replace('.', ',')} x ${item.quantidade}`;
        li.appendChild(precoQuantidade);

        // Botão de remover
        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.addEventListener('click', () => removerDoCarrinho(item.nome));
        li.appendChild(removerBtn);

        carrinhoLista.appendChild(li);

        total += item.preco * item.quantidade;
    });

    carrinhoTotal.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Finaliza a compra e limpa o carrinho
function finalizarCompra() {
    alert('Compra finalizada!');
    localStorage.removeItem('cart');
    atualizarCarrinho();
}

// Evento DOMContentLoaded para inicializar o carrinho
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();

    const finalizarCompraBtn = document.getElementById('finalizar-compra');
    if (finalizarCompraBtn) {
        finalizarCompraBtn.addEventListener('click', finalizarCompra);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    const categoriasIcon = document.getElementById('categorias-icon');
    const categoriasMenu = document.getElementById('categorias-menu');
    let searchBarVisible = false;
    let categoriasMenuVisible = false;
    let categoriasMenuFixed = false;

    // Controlar a barra de pesquisa
    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        if (searchBarVisible) {
            searchBar.style.display = 'none';
            searchBarVisible = false;
        } else {
            searchBar.style.display = 'block';
            searchBarVisible = true;
            searchBar.querySelector('input').focus();
        }
    });

    document.addEventListener('click', function(event) {
        if (searchBarVisible && !searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBar.style.display = 'none';
            searchBarVisible = false;
        }
        if (categoriasMenuVisible && !categoriasMenu.contains(event.target) && !categoriasIcon.contains(event.target) && !categoriasMenuFixed) {
            categoriasMenu.style.display = 'none';
            categoriasMenuVisible = false;
        }
    });

    // Controlar o menu de categorias
    categoriasIcon.addEventListener('mouseover', function() {
        if (!categoriasMenuFixed) {
            categoriasMenu.style.display = 'block';
            categoriasMenuVisible = true;
        }
    });

    categoriasIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        categoriasMenuFixed = !categoriasMenuFixed; // Alternar entre fixar e soltar o menu
        if (categoriasMenuFixed) {
            categoriasMenu.style.display = 'block';
            categoriasMenuVisible = true;
        } else {
            categoriasMenu.style.display = 'none';
            categoriasMenuVisible = false;
        }
    });

    categoriasMenu.addEventListener('mouseover', function() {
        if (!categoriasMenuFixed) {
            categoriasMenu.style.display = 'block';
            categoriasMenuVisible = true;
        }
    });

    categoriasMenu.addEventListener('mouseleave', function() {
        if (!categoriasMenuFixed) {
            categoriasMenu.style.display = 'none';
            categoriasMenuVisible = false;
        }
    });
});

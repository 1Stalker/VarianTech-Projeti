// Adiciona um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const quantidade = parseInt(document.getElementById('quantidade').value);

    let carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica se o item já está no carrinho
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({ nome, preco, quantidade });
    }

    localStorage.setItem('cart', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
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
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')} x ${item.quantidade}`;
        carrinhoLista.appendChild(li);

        // Botão de remover
        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.addEventListener('click', () => removerDoCarrinho(item.nome));
        li.appendChild(removerBtn);

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
document.addEventListener("DOMContentLoaded", function() {
    const categoriasIcon = document.getElementById("categorias-icon");
    const categoriasSection = document.getElementById("categorias");
    const dropdown = document.getElementById("dropdown");

    categoriasIcon.addEventListener("click", function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        categoriasSection.classList.toggle("visible");
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && !categoriasSection.contains(event.target)) {
            categoriasSection.classList.remove("visible");
        }
    });

    // Mantém a aba aberta enquanto o mouse estiver sobre a aba de categorias ou os itens
    categoriasSection.addEventListener("mouseleave", function() {
        setTimeout(() => {
            if (!categoriasSection.matches(':hover')) {
                categoriasSection.classList.remove("visible");
            }
        }, 100);
    });

    categoriasSection.addEventListener("mouseenter", function() {
        categoriasSection.classList.add("visible");
    });

    // Impede o clique na área da aba de categorias de fechar a aba
    categoriasSection.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});

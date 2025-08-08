/*
    JavaScript NÃO É JAVA

    Lógica de Programação
    - Aprender a falar com o computador (falar como o computador)
    Algoritmo
    - Receita de Bolo (Os passos)

    Algoritmo
    [x] - Colocar os Produtos na tela
      [x] - Saber quem são os Produtos
      [x] - Onde colocar os Produtos
      [x] - Estilizar os produtos
    [x] - Filtrar Produtos pelo menu
      [x] Quando algo foi digitado no input
      [x] Filtrar os produtos que contenham a palvra Chave
      [x] Colocar os produtos filtrados na tela
    [ ] - Filtrar Produtos pelo Input
      [x] Saber quando o botão foi clicado
      [ ] Qual botão foi clicado
      [ ] Trocar o CSS do botão clicado
      [ ] Filtrar os Produtos de acordo com a Categoria
      [ ] Colocar os Produtos Filtrados na Tela  

    Variáveis
     É um pedacinho da memória do computador
     que você pode guardar o que quiser
    
    Funções
     É um pedacinho de código
     que só é executado quando é CHAMADO

    console.log() - Ferramenta p/ ver o noss código
    Laços de Repetição (forEach)
    Templete String
    Eventos onload
    Seletores - querySelector
    Estrutura de Dados
     Array(matriz) - Caixa, onde podemos colocar vários dados
     Objeto - Uma forma de organizar melhor as informações

    HTML = document
    querySelector = Seletor

*/

let textoPesquisa = ""
let categoriaAtual = "all" // todos
let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999.99,
        precoOriginal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999.99,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899.99,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499.99,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299.99,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499.99,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499.99,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999.99,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
];



let containerProdutos = document.querySelector(".products-container")
let input = document.querySelector(".search-input")
let todosBotoes = document.querySelectorAll(".category-btn")

function mostrarProdutos() {
    let htmlProdutos = ""

    let produtosFiltrados = produtos.filter(prd => {

        let passouCategoria = (categoriaAtual === "all" || prd.categoria === categoriaAtual)

        /* 
        SINAIS:
        1 igual (=) -> Atribuindo valor, estou colando valor dentro
        2 ou 3 iguais (== ou ===) -> comparando
        (||) significa OU -> quer dizer (ou 1 ou outro)
        (&&) significa E -> Esse e Esse
        
        Na prática (||):
        Se temos true e false => true
        Se temos true e true => true
        Se temos false e false => false

        Na prática (&&):
        Se temos true e false => false
        Se temos true e true => true
        Se temos false e false => false
        */


        let passouPesquisa = prd.nome.toLowerCase().includes(textoPesquisa.toLowerCase())
        // true or false = verdadeiro ou falso
        // includes = verifica SE um valor existe dentro do Outro
        // prd.nome = iPhone => textoPesquisa = batata

        return passouPesquisa && passouCategoria
    })
    /* 
    filter -> array Original [produto1, produto2... ]
    Novo Array com os itens filtrados
    
    true ou false / verdadeiro ou falso
    
    */

    //htmlProdutos [item1 + item2]
    //produtos [produto1, produto2, produto3...]

    produtosFiltrados.forEach(prd => {

        htmlProdutos = htmlProdutos + `
         <div class="product-card">
                <img class="product-img" src="${prd.imagem}" alt="${prd.nome}">
                <div class="product-info">
                    <h3 class="product-name">${prd.nome}</h3>
                    <p class="product-description">${prd.descricao}</p>
                    <p class="product-price">R$ ${prd.preco}</p>
                    <button class="product-button">Ver Detalhes</button>
                </div>
            </div>
        `
    })

    containerProdutos.innerHTML = htmlProdutos
}

function pesquisar() {
    textoPesquisa = input.value

    mostrarProdutos()
}

function trocarCategoria(categoria) {
    categoriaAtual = categoria

    todosBotoes.forEach(botao => {
        botao.classList.remove('active')

        if (botao.getAttribute("data-category") === categoria) {
            botao.classList.add("active")
        }
    })

    mostrarProdutos()

}

window.addEventListener('DOMContentLoaded', () => {

    // Mostrar todos os produtos
    mostrarProdutos()

    // Ouvinte de Eventos no Input
    input.addEventListener('input', pesquisar)

    // Ouvinte de Eventos em TODOS os Botões
    todosBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            let categoria = botao.getAttribute("data-category")

            trocarCategoria(categoria)

        })
    })
})
// window = janela / onload = assim que carregar
// Event Listener (Adicionar Ouvinte de Eventos)
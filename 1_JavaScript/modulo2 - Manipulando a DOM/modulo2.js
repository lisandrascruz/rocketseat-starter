// 1 e 2
function novoQuadrado() {
    //part 1
    // const content = document.getElementById("content");
    const content = document.querySelector("div[id=content]"); // como pode funcionar sem essa linha?
    const quadrado = document.createElement("div");

    quadrado.style.width = "100px";
    quadrado.style.height = "100px";
    quadrado.style.backgroundColor = "red";
    quadrado.style.marginBottom = "3px"

    content.appendChild(quadrado);

    //part 2
    quadrado.onmouseover = function() {
        quadrado.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//3
function gerarLista(arr){
    // const lista = document.getElementById("lista");
    const lista = document.querySelector("body ul#lista")
    arr.forEach(element => {
        const el = document.createElement("li");
        el.textContent = element;
        lista.appendChild(el)
    });
}

const nomes = ["Diego", "Gabriel", "Lucas"];
gerarLista(nomes);

function removerTodos(){
    const lista = document.querySelector('ul');
    let elemento = lista.lastChild;
    while(elemento){
        lista.removeChild(elemento);
        elemento = lista.lastChild;
    }
}

function adicionarElemento() {
    removerTodos();
    let novoNome = document.getElementsByName("nome")[0].value;
    nomes.push(novoNome);
    gerarLista(nomes);

    document.getElementsByName("nome")[0].value = "";
}

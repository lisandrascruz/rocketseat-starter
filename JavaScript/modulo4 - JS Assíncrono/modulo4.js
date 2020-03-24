
// 1
function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade > 18) {
            setTimeout(resolve, 2000);
        } else {
            setTimeout(reject, 2000);
        }
    });
}

// checaIdade(20)
//     .then(function () {
//         console.log("Maior que 18");
//     })
//     .catch(function () {
//         console.log("Menor que 18");
//     });


// 1.extra: calcular baseado no input
const inputElement = document.querySelector("input#idade");
const buttonElement = document.querySelector("button#calcular");

buttonElement.onclick = () => {
    checaIdade(parseInt(inputElement.value))
        .then(function () {
            console.log("Maior que 18");
        })
        .catch(function () {
            console.log("Menor que 18");
        });
}

// 2 e 3
const buttonSearch = document.querySelector("button#adicionar");

function criarUL() {
    const body = document.querySelector('body');

    const elementoUL = document.createElement('ul');
    elementoUL.setAttribute('id', 'listaRepositorio')

    body.appendChild(elementoUL);

    return elementoUL;
}

function criarLI(texto) {
    const elementoUL = document.querySelector('ul') || criarUL();
    const elementoLI = document.createElement('li');
    const textLI = document.createTextNode(texto);

    elementoLI.appendChild(textLI);
    elementoUL.appendChild(elementoLI);

    return elementoLI;
}

function renderizarLista(arr) {
    let listaRepositorios = document.querySelector('ul#listaRepositorio') || null;
    if (listaRepositorios === null) {
        listaRepositorios = criarUL();
    }

    listaRepositorios.innerHTML = '';
    arr.forEach(titulo => {
        criarLI(titulo)
    })
}

buttonSearch.onclick = () => {
    let repositorios = ["Loading.."];
    renderizarLista(repositorios);

    const usuario = document.querySelector("input#usuario");
    let url = "https://api.github.com/users/" + usuario.value + "/repos";
    usuario.value = '';

    axios.get(url)
        .then((response) => {
            repositorios = [];
            (response.data).forEach(element => {
                repositorios.push(element.name);
            });
            renderizarLista(repositorios);
        })
        .catch((error) => {
            repositorios = ["Usuário inexistente.. "];
            renderizarLista(repositorios);
        });
}
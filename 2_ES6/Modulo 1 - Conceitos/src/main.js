// 1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin || false;
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }

}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const idades = usuarios.map(el => el.idade);
console.log(idades);

// 2.2
const deMarior = usuarios.filter((el) => el.idade > 18);
console.log(deMarior);

//2.3
const trabalhadorGoogle = usuarios.find((el) => el.empresa === 'Google');
console.log(trabalhadorGoogle);

//2.4
function maiorQueCinquenta(arr) {
    const dobraIdade = usuarios.map(el => {
        return { nome: el.nome, idade: el.idade * 2, empresa: el.empresa };
    });

    const users = dobraIdade.filter(el => el.idade < 50);

    console.log(users);
}
maiorQueCinquenta(usuarios);

//3
//3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostrarIdade = (arr) => arr.idade;
console.log(mostrarIdade(usuario));

// 3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = function () {
    return new Promise((resolve, reject) => resolve());
}

promise().then(() => console.log(`\\o/`));

// 4
// 4.1
const empresa = {
    nomeEmpresa: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nomeEmpresa, endereco: { cidade, estado } } = empresa;
console.log(nomeEmpresa); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2
function mostraInfo({ nome, idade } = usuario) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diogo', idade: 23 }));

// 5
// 5.1
const numeros = [1, 2, 3, 4, 5, 6];

const [x,...y] = numeros;
console.log(x);
console.log(y);

// 5.2
const usuarioRocketseat = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuarioRocketseat, nome: "Gabriel" };
const usuario3 = { ...usuarioRocketseat, endereco: { ...usuarioRocketseat.endereco, cidade: "Lontras" } };
console.log(usuario2);
console.log(usuario3);

// 6
const usuarioRocket = 'Diego';
const idadeUser = 23;
console.log(`O usuário ${usuarioRocket} possui ${idadeUser} anos`);

// 7
const nomeAluno = 'Diego';
const idadeAluno = 23;
const usuarioCompleto = {
    nomeAluno,
    idadeAluno,
    cidade: 'Rio do Sul',
};

console.log(usuarioCompleto);
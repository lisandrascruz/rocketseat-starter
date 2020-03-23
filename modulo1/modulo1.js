// 1
const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
// console.log(`O usuário mora na rua ${endereco.cidade}/${endereco.uf}, no bairro do ${endereco.bairro}, na rua ${endereco.rua} com o número ${endereco.numero}.`);

// 2
function pares(x, y) {
    for (let i = x; i <= y; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
// pares(32, 321);

//3
function temHabilidade(skills) {
    const resposta = skills.find(el => {
        return el === "Javascript";
    });

    if (resposta) console.log(true);
    else console.log(false);

}
const skills = ["Javascript", "ReactJS", "React Native"];
// temHabilidade(skills); // true ou false

// 4
function experiencia(anos) {
    if (anos > 0 && anos <= 1) console.log("Iniciante");
    else if (anos > 1 && anos <= 3) console.log("Intermediário");
    else if (anos > 3 && anos <= 6) console.log("Avançado");
    else if (anos => 7) console.log("Jedi Master");
}
const anosEstudo = 7;
// experiencia(anosEstudo);

// 5
const usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

for (usuario of usuarios) {
    // console.log(`O ${usuario.nome} possui as havilidades: ${usuario.habilidades.join(', ')}`);
}

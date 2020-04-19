// REQUISIÇÃO REQUEST //
// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/lisansouza');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) console.log(JSON.parse(xhr.responseText));
// }


// PROMISSES //
// const minhaPromisse = function () {
//     return new Promise(function (resolve, reject) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/lisansouza');
//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject("Erro na requisição :(");
//                 }
//             }
//         }
//     });
// }
// minhaPromisse()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((erro => {
//         console.warn(erro);
//     }));

// AXIOS //
axios.get('https://api.github.com/users/lisansouza')
    .then((response) => {
        console.log(response.data.avatar_url);
    })
    .catch((erro => {
        console.warn(erro);
    }));
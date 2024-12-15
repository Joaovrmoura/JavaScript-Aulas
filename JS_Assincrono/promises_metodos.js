//Promise.all, promise.race, promise.reject, promise.resolve

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min).toFixed(0)
}

function exeComTempo(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){
            reject('erro nas promises')
            return
        };
        setTimeout(() => {
            resolve(`${msg} Concluída após ${time}`);
        }, time);
    });
}

// array com Promises e valores estáticos
// valores que são estáticos são ntregues primeiro
const promises = [
    exeComTempo('promise 1', rand(3, 6)), 
    exeComTempo('promise 2', rand(2, 4)),
    exeComTempo('promise 3', rand(1, 3)),
];

// // Promise.all aguarda a resolução de todas as Promises do array
Promise.all(promises).then(valor => {
    // o valor será um array com os resultados se tudo for resolve
    console.log(valor); 
}).catch(e => {
    // Se qualquer Promise falhar
    console.log(e); 
});

// Promise.race vai retornar a primeira Promise 
// resolvida ou rejeitada
// retorna apenas a primeira Promise que for resolvida
// não pode ser misturados com strings
Promise.race(promises).then(valor => {
    console.log(valor); 
}).catch(e => {
    console.log(e); 
});
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000);
    }, 1000);
});

console.log('PRZED');

promise.then((result) => {
    console.log('SUKCES', result);
}).catch((error) => {
    console.log('Błąd', error);
});

console.log('PO');
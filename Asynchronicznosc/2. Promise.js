const promise = new Promise((resolve, reject) => {
    resolve(1000);
});

promise.then((result) => {
    console.log('SUKCES', result);
}).catch((error) => {
    console.log('Błąd', error);
});
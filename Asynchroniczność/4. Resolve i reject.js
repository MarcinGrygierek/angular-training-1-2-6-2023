const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         const random = Math.random();

        if(random > 0.5) {
              resolve(random);
        } else {
            reject(random);
        }
      
    }, 1000);
});

console.log('PRZED');

promise.then((result) => {
    console.log('SUKCES', result);
}).catch((error) => {
    console.log('Błąd', error);
});

console.log('PO');
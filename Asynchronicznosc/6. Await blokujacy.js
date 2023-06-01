const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random();
        resolve(1000);
    }, 1000);
});

console.log('PRZED');

const result = await promise;
console.log(result);

console.log('PO');
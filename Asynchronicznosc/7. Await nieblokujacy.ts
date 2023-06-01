const asyncFunction = async() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            resolve(1000);
        }, 1000);
    });
    
    console.log('FUNKCJA PRZED');
    
    const result = await promise;
    console.log('WYNIK', result);
    
    console.log('FUNKCJA PO');
}

console.log('GLOBAL PRZED');

asyncFunction();

console.log('GLOBAL PO');
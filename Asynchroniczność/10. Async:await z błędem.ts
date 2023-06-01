const handlePromise = async() => {
    const promise = new Promise((resolve, reject) => {
        const delay = Math.round(Math.random() * 3000 + 2000);
    
        setTimeout(() => {
            const random = Math.random();
    
            if(random > 0.5) resolve(random);
            else reject(`Błąd! Wylosowano ${random}`);
            
        }, delay);
    });

    try {
        const result = await promise;
        console.log('RESULT', result);
    } catch(e) {
        console.log('ERROR', e);
    }
}

handlePromise();
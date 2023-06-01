// pomimo "zerowego" opóźenienia wykonana się na końcu
setTimeout(() => {
    console.log('A')
}, 0)

console.log('B');
console.log('C');

// pętla zablokuje główny wątek
for(let i = 0; i < 999999999; i++) {
    const value = Math.random();
}

console.log('D');
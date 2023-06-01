const getData = async() => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log('IP', data);
}

console.log('PRZED');
getData();
console.log('PO');
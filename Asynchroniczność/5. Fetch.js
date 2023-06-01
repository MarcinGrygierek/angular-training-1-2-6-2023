const result = fetch('https://api.ipify.org?format=json');

result
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
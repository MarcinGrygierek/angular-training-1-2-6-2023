const promises = [
    fetch('https://api.ipify.org?format=json'), 
    fetch('https://api.ipify.org?format=json'), 
    fetch('https://api.ipify.org?format=json')
];

const responses = await Promise.all(promises)

const promises2 = [
    fetch('https://api.ipify.org?format=json'), 
    fetch('https://api.ipify.org?format=json'), 
    fetch('https://api.ipify.org?format=json')
];

const responses2 = await Promise.allSettled(promises)

console.log(responses, responses2);
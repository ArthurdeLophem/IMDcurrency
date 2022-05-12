
const data = {
    "username": "x",
    "email": "y",
    "password": "z"
};
console.log("fetching data...");
fetch('http://localhost:3001/users/api/v1/signup', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
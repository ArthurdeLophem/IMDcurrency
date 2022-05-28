let baseUrl = "https://imdcurrency.herokuapp.com/";
const username = document.querySelector(".username").value;
const quantity = document.querySelector(".quantity").value;
const motive = document.querySelector(".motive").value;
const comment = document.querySelector(".comment").value;

fetch(baseUrl + 'api/v1/users/transfers/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": username,
        "quantity": quantity,
        "motive": motive,
        "comment": comment
    })
}).then(res => {
    console.log(res.json())
}).catch((error) => {
    console.log(error.message);
});
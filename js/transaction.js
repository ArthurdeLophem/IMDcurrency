let baseUrl = "https://imdcurrency.herokuapp.com";
let toUserId;

document.querySelector("#username").addEventListener("change", () => {
    let username = document.querySelector("#username").value

    fetch(baseUrl + '/api/v1/users/' + username, {
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            toUserId = data.data.userId;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})


document.querySelector("#submitTransaction").addEventListener("click", (e) => {
    e.preventDefault();
    const amount = document.querySelector("#amount").value;
    const message = document.querySelector("#message").value;
    console.log(amount)
    fetch(baseUrl + '/api/v1/transfers/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "message": message,
            "_id": localStorage.getItem('_uid'),
            "to_user": toUserId,
            "amount": amount,
            "completed": true
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error.message);
        });
})
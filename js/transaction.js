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

    const quantity = document.querySelector("#amount").value;
    const motive = document.querySelector("#motive").value;
    const comment = document.querySelector("#comment").value;
    const data = ({
        "userId": toUserId,
        "quantity": quantity,
        "motive": motive,
        "comment": comment,
    })
    console.log(data);
})


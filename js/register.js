document.querySelector(".btn").addEventListener("click", (e) => {
    let username = document.querySelector(".username").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    let baseUrl = "https://imdcurrency.herokuapp.com/";

    const data = {
        "username": username,
        "email": email,
        "password": password
    }
    console.log(data);
    fetch(baseUrl + 'api/v1/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (data.success == true) {
                let token = data.message.token;
                localStorage.setItem("token", token);
                let userId = data.message._id;
                localStorage.setItem("_uid", userId);
                window.location.href = "index.html";
            }
        })

        .catch((error) => {
            console.error('Error:', error);
        });
})
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    let baseUrl = "https://imdcurrency.herokuapp.com/";
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    fetch(baseUrl + 'api/v1/users/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    }).then(res => {
        console.log(res.json())
    }).catch((error) => {
        console.log(error.message);
    });
})
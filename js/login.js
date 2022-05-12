document.querySelector(".submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

    fetch('http://localhost:3001/users/api/v1/login/', {
        method: 'POST',
        headers: {
            contentType: 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then(res => {
        console.log(res.json())
    }).catch((error) => {
        console.log(error.message);
    });
})
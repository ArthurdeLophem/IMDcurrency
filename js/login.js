document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    fetch('http://localhost:3001/api/v1/users/login/', {
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
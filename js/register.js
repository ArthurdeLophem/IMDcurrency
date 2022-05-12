document.querySelector(".btn").addEventListener("click", (e) => {
    let username = document.querySelector(".username").value;
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    console.log(username, email, password)
    fetch('http://localhost:3001/users/api/v1/signup/', {
        method: 'POST',
        headers: {
            contentType: 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "email": email,
            "password": password
        })
    }).then(result => {
        console.log("hallo")
        console.log(result.json())
    }).catch((error) => {
        console.log("fout")
        console.log(error.message);
    });
})
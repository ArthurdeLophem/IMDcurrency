    let baseUrl = "https://imdcurrency.herokuapp.com/";
    const position = document.querySelector(".position").value;
    const username = document.querySelector(".username").value;
    const coinsUser = document.querySelector(".coins-user").value;

    fetch(baseUrl + 'api/v1/users/leaderboard/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "position": position,
            "username": username,
            "Amount of coins": coinsUser
        })
    }).then(res => {
        console.log(res.json())
    }).catch((error) => {
        console.log(error.message);
    });
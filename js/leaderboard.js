    let baseUrl = "https://imdcurrency.herokuapp.com/";
    const position = document.querySelector(".position").value;
    const username = document.querySelector(".username").value;
    const coinsUser = document.querySelector(".coins-user").value;
    const table = document.getElementById("leaderboard");

    fetch(baseUrl + 'api/v1/users/leaderboard/', {
        method: 'GET',
        headers: {
            'x-access-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            
            console.log(data.data.leaderboard[0].username);  
            for(let i = 0; i < data.data.leaderboard.length; i++) {
                let row = document.createElement("tr");
                let usernameCell = document.createElement("td");
                let coinsCell = document.createElement("td");
                let positionCell = document.createElement("td");

                positionCell.innerHTML = [i + 1];
            
                usernameCell.innerHTML = data.data.leaderboard[i].username;
                coinsCell.innerHTML = data.data.leaderboard[i].coins;

                row.appendChild(positionCell);
                row.appendChild(usernameCell);
                row.appendChild(coinsCell);
                table.appendChild(row);
            }

    }).catch((error) => {
        console.log(error.message);
    });
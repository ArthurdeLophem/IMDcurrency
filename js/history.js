window.addEventListener("load", (e) => {
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    let uid = userData._id;
    let baseUrl = "https://imdcurrency.herokuapp.com";

    fetch(baseUrl + '/api/v1/transfers/' + uid, {
        headers: {
            'x-access-token': userData.token
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            data.forEach(element => {
                console.log(element)
                let username
                if (element.user == userData._id) {
                    username = `<h3 class="name">you sent some IMD-coins</h3>`
                }
                else {
                    //should be fetching a user by id with a response of its username so it shows beautifully in app
                    //username = `<h3 class="name">you sent some IMD-coins</h3>`
                }
                let transaction = document.createElement("div")
                transaction.classList.add("transaction")
                transaction.innerHTML = `${username}
                    <p class="comment">${element.message}</p>
                    <p class="date">${element.date}</p>
                    <p class="amount">${element.amount}</p>`
                document.querySelector('.container').appendChild(transaction)
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})

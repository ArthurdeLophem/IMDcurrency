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
                let transaction = document.createElement("div")
                transaction.classList.add("transaction")
                transaction.innerHTML = `
                    <h3 class="name">${element.user} send you some IMD-coins</h3>
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

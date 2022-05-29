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
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})

let baseUrl = "https://imdcurrency.herokuapp.com";
let toUserId;

document.querySelector("#username").addEventListener("change", () => {
    let username = document.querySelector("#username").value

    fetch(baseUrl + '/api/v1/users/' + username, {
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
            toUserId = data.data.userId;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})


document.querySelector("#submitTransaction").addEventListener("click", (e) => {
    e.preventDefault();
    const amount = document.querySelector("#amount").value;
    const message = document.querySelector("#message").value;

    if (message == null || message == "", amount == null || amount == "") {
        document.querySelector('form').style.display = 'none';

        let container = document.createElement('div');
        container.classList.add('container');
        container.style.alignItems = 'center';

        let feedback = document.createElement('img');
        let feedbackText = document.createElement('p');

        feedbackText.innerHTML = 'transfer failed, try again';
        feedback.src = './images/failed.svg';
        feedback.classList.add('form__feedback--failed');
        container.appendChild(feedback);
        container.appendChild(feedbackText);
        document.querySelector('body').appendChild(container);

        window.setTimeout(() => {
            window.location.href = "transaction.html";
        }, 2000);
    } else {
        fetch(baseUrl + '/api/v1/transfers/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "message": message,
                "_id": localStorage.getItem('_uid'),
                "to_user": toUserId,
                "amount": amount,
                "completed": true
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status === 'success') {
                    document.querySelector('form').style.display = 'none';

                    let container = document.createElement('div');
                    container.classList.add('container');
                    container.style.alignItems = 'center';

                    let feedback = document.createElement('img');
                    let feedbackText = document.createElement('p');

                    feedbackText.innerHTML = 'transfer success, redirecting back home';
                    feedback.src = './images/success.svg';
                    feedback.classList.add('form__feedback--success');
                    container.appendChild(feedback);
                    container.appendChild(feedbackText);
                    document.querySelector('body').appendChild(container);

                    window.setTimeout(() => {
                        window.location.href = "index.html";
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

})
window.addEventListener("load", () => {
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData);
    document.querySelector(".myname").innerHTML += userData.username;
    document.querySelector(".mycoins").innerHTML = userData.coins;
})
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const loginButton = document.querySelector("#login-button")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    loginButton.onclick = () => {
        console.log("logged in")
        if (username.value === storedUsername && password.value === storedPassword) {
            alert(`Login Successful, welcome ${username.value}!`)
            window.location.href = "home.html"
        } else {
            alert("Credentials doesn't match the database, please try again")
        }
    }
})
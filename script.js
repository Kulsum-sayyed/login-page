function login() {
    let username = document.querySelector("input[type='text']").value;
    let password = document.querySelector("input[type='password']").value;

    let message = document.getElementById("message");

    if (username === "" || password === "") {
        message.innerText = "Please fill all fields";
        message.style.color = "red";
    } else if (username === "admin" && password === "1234") {
        message.innerText = "Login successful!";
        message.style.color = "green";
    } else {
        message.innerText = "Invalid credentials";
        message.style.color = "red";
    }
}
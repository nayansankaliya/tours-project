document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if(name && email && password) {
        alert("Sign up successful!");
    } else {
        alert("Please fill in all fields.");
    }
});
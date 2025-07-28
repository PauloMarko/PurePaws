function validateFields() {
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById("btnlogin")
    }
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}
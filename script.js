function showMessage() {
    alert("Welcome! Let's get started 🚀");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all fields!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
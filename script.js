
function validateForm() {
    var name = document.getElementsByName("name")[0].value.trim();
    var password = document.getElementsByName("password")[0].value;

    // Name validation
    var namePattern = /^[A-Za-z ]+$/;

    if (name.length < 6) {
        alert("Name must be at least 6 characters long.");
        return false;
    }

    if (!namePattern.test(name)) {
        alert("Name should contain only alphabets and spaces.");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Registration successful!");
    return true;
}

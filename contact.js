document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let message = document.getElementById('message').value;

    if (validateEmail(email) && validatePhone(contactNumber) && message.trim() !== "") {
        alert("Form submitted successfully!");
        // Add your form submission logic here (e.g., sending the data to a server)
    } else {
        alert("Please fill out the form correctly.");
    }
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[0-9]{10}$/;
    return re.test(String(phone));
}

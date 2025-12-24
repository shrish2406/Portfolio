    emailjs.init("mal-P5xdcM6h3g666");
    document.getElementById("contact-form")
    .addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_fbq4yxy",    
        "template_w773n1g",
        this
    )
    .then(function() {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message. Try again!");
        console.log(error);
    });
});
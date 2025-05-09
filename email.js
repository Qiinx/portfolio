// EmailJS initialisieren (ersetze mit deinem eigenen User ID)

document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault(); // verhindert Seitenreload

    const templateParams = {
        from_name: document.getElementById("name").value,
        reply_to: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_bgbegvl", "template_lb7q61r", templateParams)
        .then(function (response) {
            alert("E-Mail wurde erfolgreich gesendet!");
            console.log("SUCCESS!", response.status, response.text);
        }, function (error) {
            alert("Fehler beim Senden der E-Mail.");
            console.log("FAILED...", error);
        });
});

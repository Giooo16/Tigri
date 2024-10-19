document.getElementById("loginButton").addEventListener("click", function() {
    document.getElementById("passwordScreen").style.display = "block";
    document.getElementById("loginButton").style.display = "none";
});

document.getElementById("submitPassword").addEventListener("click", function() {
    var password = document.getElementById("passwordInput").value;
    var correctPassword = "passwordTigri"; // Sostituisci con la password fissa

    if (password === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Password errata! Riprova.");
    }
});

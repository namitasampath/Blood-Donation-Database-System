document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault();

    let donorData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        bloodType: document.getElementById("bloodType").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value
    };

    console.log("Donor Data:", donorData);

    document.getElementById("message").innerText = "Registration Successful!";
    
    this.reset();
});

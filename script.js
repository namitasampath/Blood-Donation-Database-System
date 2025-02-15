document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let formData = {};
            let redirectPage = "index.html";

            if (window.location.href.includes("donor.html")) {
                formData = {
                    name: document.getElementById("name").value,
                    age: document.getElementById("age").value,
                    bloodType: document.getElementById("bloodType").value,
                    contact: document.getElementById("contact").value,
                    address: document.getElementById("address").value
                };
                console.log("Donor Data:", formData);
            } 
            else if (window.location.href.includes("receiver.html")) {
               formData = {
                    name: document.getElementById("name").value,
                    age: document.getElementById("age").value,
                    bloodType: document.getElementById("bloodType").value,
                    contact: document.getElementById("contact").value,
                    address: document.getElementById("address").value
                };
                console.log("Receiver Data:", formData);
            } else {
                console.error("Unknown form submission.");
                return;
            }

           
            document.getElementById("message").innerText = "Registration Successful!";

            form.reset();

            setTimeout(() => {
                window.location.href = redirectPage;
            }, 2000);
        });
    } else {
        console.error("Form not found! Ensure your form has id='Form'.");
    }
});

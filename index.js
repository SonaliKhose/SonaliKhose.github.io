
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navItems.classList.toggle('active');
});


// Initialize EmailJS
emailjs.init("bTkuRD6ZcbG8zfQ69"); // Replace with your EmailJS User ID

// Form submission event
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate form fields
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Send email using EmailJS
  emailjs.send("service_q66iuen", "template_d4kb0gm", {
    from_name: name,
    from_email: email,
    message: message,
  })
    .then(function (response) {
      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);

      // Clear form fields
      document.getElementById("contact-form").reset();
    })
    .catch(function (error) {
      alert("Failed to send the message. Please try again.");
      console.error("FAILED...", error);
    });
});

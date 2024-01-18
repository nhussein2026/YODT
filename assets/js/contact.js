function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display confirmation alert
    window.alert('Thank you for your message! We will get back to you soon.');

    // Send confirmation email to the user (simplified, not secure)
    sendConfirmationEmail(name, email);

    // Reset the form
    document.getElementById('contactForm').reset();
}

function sendConfirmationEmail(name, userEmail) {
    // In a real-world scenario, you would send an HTTP request to a server to handle email sending
    // This is a simplified example for demonstration purposes only

    // Log to console (replace with actual email sending logic)
    console.log(`Confirmation email sent to ${userEmail}.`);
}

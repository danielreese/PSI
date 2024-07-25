document.getElementById('subscribe-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email-input').value;

    try {
        const response = await fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });

        if (response.ok) {
            alert('Thank You For Subscribing!');
        } else {
            alert('Looks Like Something Went Wrong. Please Try Again!');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

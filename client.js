// client.js
document.getElementById('data-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const data = document.getElementById('data-input').value;
    fetch('/submit-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    })
    .then(response => {
        if (response.ok) {
            alert('Data submitted successfully!');
        } else {
            alert('Failed to submit data.');
        }
    })
    .catch(error => console.error('Error:', error));
});

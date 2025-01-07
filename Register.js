const form = document.getElementById('reg-form');
const successMessage = document.getElementById('successMessage');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     form.style.display = 'none';
//     successMessage.style.display = 'block';
// });
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(form); 
    console.log([...formData.entries()]);
    const data = Object.fromEntries(formData); 

    try {
        const response = await fetch('http://localhost:8000/api/NGO', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        console.log(response);
        if (response.ok) {
            form.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            alert('Submission failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});


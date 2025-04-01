
    function registerVolunteer() {
        const name = document.getElementById('volunteer-name').value;

        if (name.trim() === '') {
            alert('Please enter your name!');
            return;
        }
        fetch('https://ngo-backend-git-main-payal-vermas-projects.vercel.app/certificate/generate-certificate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to generate the certificate.');
                }
                return response.blob();
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `certificate_${name.replace(/\s+/g, '_')}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while generating the certificate.');
            });
    }


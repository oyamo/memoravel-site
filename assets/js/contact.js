const API_ENDPOINT = "https://api.memoraveltravel.com/contact"
function main() {
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementsByName('name')[0].value;
        const phone = document.getElementsByName('phone')[0].value;
        const message = document.getElementsByName('message')[0].value;
        const email = document.getElementsByName('email')[0].value;
        const data = {
            "name": name,
            "phone": phone,
            "message": message,
            "email": email
        }

        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            // Redirect to previous page or home page
            window.location.href = "https://www.memoraveltravel.com/";
        })
        .catch(err => {
            console.log(err);
        }
        )
    })
}

// Run main when the page is loaded
window.onload = main;
const btnLogin = document.querySelector('.login ');
//console.log(btnLogin);

btnLogin.addEventListener('click', login);

async function login() {
    const email = document.querySelector('#email').value;
    const psw = document.querySelector('#psw').value;
    //console.log(email, psw);
    
    const response = await fetch('http://127.0.0.1:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, psw }),
        credentials: 'include'
    });

    const data = await response.json();

    if (response.ok) {
        
    } else if (data.errors) {
        let errorMessages = '';
        data.errors.forEach(hiba => {
            
        });
    }
}
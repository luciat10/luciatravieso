function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errorMessage = document.getElementById('error-message');

    if (username.trim() === '' || password.trim() === ''){
        alert("Por favor, complete ambos campos.")
    } else {
        localStorage.setItem ('username', 'true');
        localStorage.setItem ('password', 'true');
        
        window.location.href = 'index.html';
    }
}


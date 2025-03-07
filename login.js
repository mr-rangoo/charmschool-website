document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const flipToSignUp = document.getElementById('flipToSignUp');
    const flipToSignIn = document.getElementById('flipToSignIn');

    flipToSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        card.classList.add('flipped');
    });

    flipToSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        card.classList.remove('flipped');
    });
});

function password() {
    let x = document.getElementById("password");
    let y = document.getElementById("pass-icon");
    
    if (x.type === "password") {
        x.type = "text";
        y.src = "hide.png";
    } else {
        x.type = "password";
        y.src = "show.png";
    }
}

function signupPassword() {
    let x = document.getElementById("signupPassword");
    let y = document.getElementById("signup-pass-icon");
    
    if (x.type === "password") {
        x.type = "text";
        y.src = "hide.png";
    } else {
        x.type = "password";
        y.src = "show.png";
    }
}
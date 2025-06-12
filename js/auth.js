// --- Authentication Elements ---
const authContainer = document.getElementById('auth-container');
const loginPanel = document.getElementById('login-panel');
const registerPanel = document.getElementById('register-panel');
const mainContent = document.getElementById('main-content');

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginErrorMessage = document.getElementById('login-error-message');

const registerForm = document.getElementById('register-form');
const registerSuccessMessage = document.getElementById('register-success-message');
const showRegisterPanelBtn = document.getElementById('show-register-panel');
const showLoginPanelBtn = document.getElementById('show-login-panel');

// --- Dummy Credentials ---
const VALID_USERNAME = 'user';
const VALID_PASSWORD = 'user123';

// --- Functions for Panel Toggling ---
function showLogin() {
    registerPanel.classList.add('hidden');
    loginPanel.classList.remove('hidden');
    registerSuccessMessage.style.display = 'none';
    loginErrorMessage.style.display = 'none';
    document.title = 'Pendidikan Ilmu Komputer - Login';
}

function showRegister() {
    loginPanel.classList.add('hidden');
    registerPanel.classList.remove('hidden');
    loginErrorMessage.style.display = 'none';
    document.title = 'Pendidikan Ilmu Komputer - Register';
}

// --- Event Listeners for Panel Switching ---
showRegisterPanelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
});

showLoginPanelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

// --- Function to Load Main Content Dynamically ---
async function loadMainContent() {
    const mainContentDiv = document.getElementById('main-content');
    mainContentDiv.innerHTML = ''; 

    const sectionFiles = [
        'templates/navbar.html',
        'templates/sections/home.html',
        'templates/sections/about.html',
        'templates/sections/materials.html',
        'templates/sections/courses.html',
        'templates/sections/blog.html',
        'templates/sections/contact.html',
        'templates/footer.html'
    ];

    try {
        const responses = await Promise.all(sectionFiles.map(file => fetch(file)));
        const htmlContents = await Promise.all(responses.map(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${response.url}: ${response.statusText}`);
            }
            return response.text();
        }));

        htmlContents.forEach(html => {
            mainContentDiv.insertAdjacentHTML('beforeend', html);
        });

        if (typeof initializeMainScript === 'function') {
            initializeMainScript();
        }

        authContainer.style.display = 'none';
        mainContent.style.display = 'block';
        document.title = 'Pendidikan Ilmu Komputer';

        document.getElementById('logout-button-desktop').addEventListener('click', logout);
        document.getElementById('logout-button-mobile').addEventListener('click', logout);


    } catch (error) {
        console.error("Error loading main content:", error);
        alert("Failed to load website content. Please try again later.");
        authContainer.style.display = 'flex';
    }
}


// --- Login Form Submission ---
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        loginErrorMessage.style.display = 'none';
        loadMainContent();
    } else {
        loginErrorMessage.style.display = 'block';
        passwordInput.value = '';
    }
});

// --- Register Form Submission (Dummy) ---
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(() => {
        registerSuccessMessage.style.display = 'block';
        document.getElementById('reg-username').value = '';
        document.getElementById('reg-email').value = '';
        document.getElementById('reg-password').value = '';
        showLogin(); 
    }, 500); 
});

// --- Logout Functionality ---
function logout() {
    authContainer.style.display = 'flex';
    mainContent.style.display = 'none';
    usernameInput.value = '';
    passwordInput.value = '';
    mainContent.innerHTML = ''; 
    showLogin(); 
}

// Initial state: show login panel
document.addEventListener('DOMContentLoaded', showLogin);
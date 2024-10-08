function createMenu() {
    if (document.querySelector('.nav-container')) {
        console.log('Menu already exists, skipping creation');
        return;
    }

    const menuHTML = `
        <nav class="nav-container">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="addPost.html">Add Post</a></li>
            </ul>
            <div class="login-container">
                <a href="login.html" class="login-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="user-icon">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Login</span>
                </a>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', menuHTML);
}

document.addEventListener('DOMContentLoaded', createMenu);
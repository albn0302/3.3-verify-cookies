const btn = document.getElementById('btn');

btn.addEventListener('click', createCookie);

function createCookie() {
    document.cookie = 'role=admin';
}
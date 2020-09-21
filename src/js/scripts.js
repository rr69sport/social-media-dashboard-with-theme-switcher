const { default: callAsyncFunction } = require('./modules/module');

const toggleTheme = document.getElementById('toggle-theme')
const body = document.getElementById('theme');

toggleTheme.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        toggleTheme.textContent = 'Light theme'
    } else {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        toggleTheme.textContent = 'Dark theme'
    }
    callAsyncFunction()
})
// const { default: alternateTheme } = require('./modules/module')
import alternateTheme from './modules/module';

const toggleTheme = document.getElementById('toggle-theme')

toggleTheme.addEventListener('click', () => {
    alternateTheme('alternate-theme', 'light-theme', 'dark-theme')
})
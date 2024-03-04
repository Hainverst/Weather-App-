const main = document.querySelector('main')
const root = document.querySelector(':root')

let switcher = document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#fff')
        root.style.setProperty('--font-color', '#000000')
        root.style.setProperty('--weather-color', '#fff')
        root.style.setProperty('--day-list', '#232931')
        root.style.setProperty('--day-font', '#fff')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#37474f')
        root.style.setProperty('--font-color', '#fff')
        root.style.setProperty('--weather-color', '#232931')
        root.style.setProperty('--day-list', '#fff')
        root.style.setProperty('--day-font', '#232931')
        main.dataset.theme = 'dark'
    }
})

export {main, root, switcher}
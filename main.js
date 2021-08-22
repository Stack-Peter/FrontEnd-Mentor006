const form = document.querySelector('form')
const input = document.querySelectorAll('input')
const email = document.querySelector('[name="email"]')
const btn = document.querySelector('button')
const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/



function handleClick(e) {
    e.preventDefault()
    input.forEach((e) => {
        if (e.value == '') {
            e.nextElementSibling.classList.add('empty')
            e.classList.add('actived')
        } else {
            e.nextElementSibling.classList.remove('empty')
            e.classList.remove('actived')
        }
    })
    if (regexp.test(email.value)) {
        console.log('email válido')
        email.nextElementSibling.classList.remove('empty-mail')
        email.classList.remove('actived')
    } else {
        email.nextElementSibling.classList.add('empty-mail')
        email.classList.add('actived')
    }
}
btn.addEventListener('click', handleClick)
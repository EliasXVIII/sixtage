const loginPage = document.querySelector('#logingJ')

loginPage.addEventListener('submit',(e)=>{
    e.preventDefault()

const usuario = document.querySelector('#usuario')
const contraseña = document.querySelector('#contraseña')

const users = JSON.parse(localStorage.getItem('users')) || []
})
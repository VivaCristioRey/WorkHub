//Modal login
var btn = document.getElementById('logIn')
var modalLogin = document.getElementById('modalLogin')

btn.addEventListener('click', () => {
    modalLogin.showModal()
})

//Cerrar modal al hacer clic fuera
modalLogin.addEventListener('click', (event) => {
    if (event.target === modalLogin) {
        modalLogin.close()
    }
})

//Validar usuario
let adminUser = {
    correo: 'admin@usuario.com',
    contraseña: '123456'
}
var sendData = document.getElementById('sendLogIn')

sendData.addEventListener('click', () => {
    var user = document.getElementById('emailUsr').value
    var pass = document.getElementById('passUsr').value

    if (user === adminUser.correo && pass === adminUser.contraseña) {
        window.open('adminPanel.html', '_self')
    } else {
        alert('Datos inválidos')
    }
})
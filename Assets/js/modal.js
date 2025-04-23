//Abrir modal
var btn = document.getElementById('logIn')
var modalLogin = document.getElementById('modalLogin')

btn.addEventListener('click', () => {
    modalLogin.showModal()
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
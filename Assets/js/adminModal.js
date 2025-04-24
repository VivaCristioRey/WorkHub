//Modal agregar usuario
let users = []
let editingUserIndex = null

function openRegisterModal() {
    // Limpia el formulario y abre el modal
    document.getElementById('userForm').reset()
    document.getElementById('userId').value = users.length + 1
    editingUserIndex = null
    document.getElementById('userModalLabel').innerText = 'Registrar Usuario'
    new bootstrap.Modal(document.getElementById('userModal')).show()
}

function saveUser() {
    const id = document.getElementById('userId').value
    const name = document.getElementById('userName').value
    const age = document.getElementById('userAge').value
    const cedula = document.getElementById('userCedula').value
    const phone = document.getElementById('userPhone').value
    const address = document.getElementById('userAddress').value

    const user = { id, name, age, cedula, phone, address }

    if (editingUserIndex !== null) {
        // Editar usuario existente
        users[editingUserIndex] = user
    } else {
        // Agregar nuevo usuario
        users.push(user)
    }

    updateTable()
    bootstrap.Modal.getInstance(document.getElementById('userModal')).hide()
}

function updateTable() {
    const tableBody = document.getElementById('userTableBody')
    tableBody.innerHTML = ''

    users.forEach((user, index) => {
        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.cedula}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>
                    <button class="btn btn-warning btn-sm me-2" onclick="editUser(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Borrar</button>
                </td>
            </tr>
        `
        tableBody.innerHTML += row
    })
}

function editUser(index) {
    const user = users[index]
    document.getElementById('userId').value = user.id
    document.getElementById('userName').value = user.name
    document.getElementById('userAge').value = user.age
    document.getElementById('userCedula').value = user.cedula
    document.getElementById('userPhone').value = user.phone
    document.getElementById('userAddress').value = user.address

    editingUserIndex = index
    document.getElementById('userModalLabel').innerText = 'Editar Usuario'
    new bootstrap.Modal(document.getElementById('userModal')).show()
}

function deleteUser(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        users.splice(index, 1)
        updateTable()
    }
}
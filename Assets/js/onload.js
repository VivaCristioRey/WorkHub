function loadSection(name) {
    fetch(`${name}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById('adminContent').innerHTML = html
            if (name === 'users') {
                const script = document.createElement('script')
                script.src = 'Assets/js/modal.js'
                document.body.appendChild(script)
            }
        })
}
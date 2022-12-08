function logar() {
    const usuario = 'Cafu';
    const senha = 'escova';
    
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;

    if (usuario === name && senha === pass) {
        var nameUser = document.getElementById('nameUser');
        nameUser.textContent = name;

        document.getElementById('welcome').classList.remove('d-none');
        document.getElementById('name').classList.add('d-none');
        document.getElementById('password').classList.add('d-none');
    } else {
        document.getElementById('name').style.border = "solid 2px red";
        document.getElementById('password').style.border = "solid 2px red";
    }
    
    
}
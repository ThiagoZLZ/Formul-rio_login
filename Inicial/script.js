function logar(event){
    let login = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;
    let aviso = document.querySelector('.aviso')

    event.preventDefault()

    const senhaModificada = localStorage.getItem("senhaModificada")

    if(login == 'PC' && (senha === senhaModificada || senha === "adim")){
        alert('SUCESSO no Login!');
    } else {
        aviso.innerHTML = `<h2> Usuario ${login} ou senha ${senha} não encontrados </h2> ` 
    }
}


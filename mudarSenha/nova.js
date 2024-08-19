function nova(event) {

    event.preventDefault(); 

    console.log("esta funcionando");

  let login = document.querySelector("#login");
  let aviso = document.querySelector(".aviso");
  let botaoMudar = document.querySelector(".botaoNova");

  

  botaoMudar.textContent = "Mudar senha";

  if (login.value == "PC") {
        aviso.innerHTML = `
        <input type="password" placeholder="Nova senha" id="novaSenha"> 
        <input type="password" placeholder="Confirmar senha" id="confirmaSenha">  

        `;

        botaoMudar.onclick = function () {
            let novaSenha = document.querySelector("#novaSenha").value;
            let confirmaSenha = document.querySelector("#confirmaSenha").value;

            if (novaSenha === "" || confirmaSenha === "") {
                    alert("Preencha todos os campos!")
                } else if (novaSenha !== confirmaSenha) {
                    alert("As senhas não são iguais!")
                } else if (!apenasNumeros(novaSenha)) {
                    alert ("A senha deve conter apenas números!")
                } else if (novaSenha.length <= 3) {
                    alert ("A senha deve conter mais de 3 dígitos!")
                } else {
                    alert("SUCESSO, senha modificada!");
                    localStorage.setItem("senhaModificada", novaSenha)
                    redirecionarParaLogin()
                }
        };

        function apenasNumeros(senha) {
            return /^\d+$/.test(senha)
        }

    } else {
            login.value = "";
            botaoMudar.textContent = "Entrar";
            aviso.innerHTML = `
            <h2>Esse usuário não existe</h2>  
            `;
        }

        
}



function redirecionarParaLogin() {
    
    setTimeout(() => {
        window.location.href = "../index.html"; 
    }, 100); 
}



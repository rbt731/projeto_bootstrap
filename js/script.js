// alert("Olá Mundo")
// console.log("Só quem é dev vai descobrir!")
let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome) // -----*-------O addEventListener cria um evento para algum elemento, no caso estamos utilizando o evento 'blur', que é quando o foco sai de um campo

/*nome.addEventListener("focus", function(){
    nome.value = "Este campo não deve ficar vazio"
})*/

let idade = document.querySelector("#idade")

idade.addEventListener("blur", function(){
    if(idade.value >= 18){
        alert("Você possui mais que 18 anos!")
    }
    else{
        alert("infelizmente você não é de maior!")
        window.location.href = "https://www.youtubekids.com"
    }
})

let endereco = document.querySelector("#endereco")

endereco.addEventListener("blur", function(){
    if(endereco.value.length >= 35){
    alert("O endereço esta muito grande!")
        endereco.style.border = "2px solid red"
    }
    else{
        alert("O endereço está OK!")
        endereco.style.border = "2px solid yellow"
    }
})

let email = document.querySelector("#email")
let confirmar = document.querySelector("#confirmar")

email.addEventListener("keyup", function(){
    let minusculo = email.value.toLowerCase() //Tornando o conteudo do email minusculo
    confirmar.value = email.value

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1){
        console.log("Email invalido")
        // email.style.border = "2px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    else{
        console.log("Email valido")
        // email.style.border = "2px solid green"
        email.classList.remove("border-danger")
        email.classList.add("border-success")
    }

    console.log(email.value.indexOf("@"))
})

let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

// ()=>{} isto é uma arrow function, ou seja, uma versão resumida da função anônima
btn_olho.addEventListener("click", ()=>{
    if(btn_olho.classList.contains("fa-eye")){
        // console.log("A classe existe")
        btn_olho.classList.remove("fa-eye")
        btn_olho.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")
    }
    else{
        // console.log("a classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
})

// PEGANDO DADOS DO CAMPO RADIO
let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btn_Escolaridade =document.querySelector("#btnEscolaridade")

btn_Escolaridade.addEventListener("click", (evento)=>{
    // console.log(evento)
    evento.preventDefault() // Esta função irá impedir o comportamento padrão do botão

    console.log(escolaridade[2])
})
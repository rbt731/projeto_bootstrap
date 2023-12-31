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
endereco.addEventListener("blur", ()=>{
    if(endereco.value != ""){
        if(endereco.value.length >= 35){
        alert("O endereço esta muito grande!")
            endereco.style.border = "2px solid red"
        }
        else{
            alert("O endereço está OK!")
            endereco.style.border = "2px solid yellow"
        }

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

    // console.log(escolaridade[2])

    for(let itens of escolaridade){
        // console.log(itens)
        if(itens.checked){
            // alert("Sua escolaridade é "+itens.value)
            alert(`Sua escolaridade é ${itens.value}`) //isto é um template string, outra forma de concatensar
            // let opcao = confirm("Tem certeza?")
            // console.log(opcao)
            confirm("Tem certeza?")
        }
    }
})

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")

contrato.classList.add("d-none")

escolha.addEventListener("change", ()=>{
    // console.log(escolha)
    if(escolha.checked){
        contrato.classList.add("d-block")
        contrato.classList.remove("d-none")
    }
    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
    }
})

let concordo = document.querySelector("#concordo")

concordo.addEventListener("change", ()=>{
    if(concordo.checked){
        // console.log(concordo)
        alert("Obrigado pela escolha")
    }
    else{
        alert("Poxa, muito triste sua desisão")
        let mensagem = prompt("diga porque você desmarcou") //cria uma caixa de texto
    }
})

let trabalho = document.querySelector(".form-select")

trabalho.addEventListener("change", ()=>{
    //  console.log(trabalho.options)

    for(let itens of trabalho){
        if(itens.selected){
            // console.log(itens.value)
            if(itens.value == "RH"){
                trabalho.style.backgroundColor = "cyan"
            }
            if(itens.value == "Tecnologia"){
                trabalho.style.backgroundColor = "orange"
            }
            if(itens.value == "Financeiro"){
                trabalho.style.color = "white"
                trabalho.style.backgroundColor = "pink"
            }
        }
    }
})

let cor = document.querySelector("#cor")
cor.addEventListener("change", ()=>{
    console.log(cor.value)
    document.body.style.backgroundColor = cor.value
})

let mensagem = document.querySelector("#mensagem")
let restante =  document.querySelector("#restante")
let limite = 20
mensagem.addEventListener("keyup", ()=>{
    // console.log(mensagem.value.length)
    restante.textContent = mensagem.value.length

    console.log(restante.parentNode)

    if(restante.textContent == 20){
        mensagem.classList.add("border-danger")
        restante.parentNode.style.color = "red"
    }
    else{
        mensagem.classList.remove("border-danger")
        restante.parentNode.style.color = "black"
    }

    mensagem.setAttribute("maxlength", limite)
})
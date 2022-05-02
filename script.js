var selecao = document.querySelector('#typecode')
var pass = document.querySelector('#pass')
var divencode = document.querySelector('#divencoders1')
var radiobtn = document.querySelector('#radio1')
 
// Função para mostrar os passos quando cifra de Cesar for selecionado

selecao.addEventListener('click', function(){
    if (selecao.value == '2') {
        pass.style.display = 'flex'
    } else {
        pass.style.display = 'none'
    }
        
}
)

// Função para criar botões

radiobtn.addEventListener('click', function(){

    if (codyfier.checked) {
        divencode.innerHTML = `<input class="btnInput" id="btnEncoder" type="button" value="Codificar mensagem"
        onclick="encoder64()">`
    } else if (decodyfier.checked){
        divencode.innerHTML = `<input class="btnInput" id="btnDecoder" type="button" value="Decodificar mensagem" onclick="decoder64()">`
    }
})

//Codificação e Decodificação em Base64

var texto = document.querySelector('#texto')
var txtArea = document.querySelector('#resulText')
var valueText; 

function encoder64(){
    if(selecao.value == '3' && codyfier.checked){
    valueText = texto.value
    txtArea.value = btoa(valueText)}
}

function decoder64(){
    if (selecao.value == '3' && decodyfier.checked){
        valueText = texto.value
        txtArea.value = atob(valueText)
    }
}
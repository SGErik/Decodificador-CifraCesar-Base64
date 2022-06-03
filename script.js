var selecao = document.querySelector('#typecode')
var pass = document.querySelector('#pass')
var divencode = document.querySelector('#divencoders1')
var radiobtn = document.querySelector('#radio1')

// Função para mostrar os passos quando cifra de Cesar for selecionado

selecao.addEventListener('click', function () {
    if (selecao.value == '2') {
        pass.style.display = 'flex'
    } else {
        pass.style.display = 'none'
    }

}
)

// Função para criar botões

radiobtn.addEventListener('click', function () {

    if (codyfier.checked) {
        divencode.innerHTML = `<input class="btnInput" id="btnEncoder" type="button" value="Codificar mensagem" onclick="encoder64()">`
    } else if (decodyfier.checked) {
        divencode.innerHTML = `<input class="btnInput" id="btnDecoder" type="button" value="Decodificar mensagem" onclick="decoder64()">`
    }
})

//Funções de Codificação e Decodificação de: Cifra de Cesar e Base64

var texto = document.querySelector('#texto').value
var txtArea = document.querySelector('#resulText')
var valueText;



// btn1Encode.addEventListener('click', function (){
//     if (selecao.value == '3' && codyfier.checked){
//         encoder64()
//     } else if (selecao.value == '2' && codyfier.checked){
//         codeCesar()
//     }
// })


// function encoder64 (){
//     var texto = document.querySelector('#texto').value
//     var txtArea = document.querySelector('#resulText')
//     var valueText; 

//     valueText = texto
//     txtArea.value = btoa(valueText)

// }





//Função do Base64 e chamada da função de Cifra de Cesar

function encoder64() {
    var texto = document.querySelector('#texto').value
    if (selecao.value == '3' && codyfier.checked) {
        valueText = texto
        txtArea.value = btoa(valueText)
    } else if (selecao.value == '2' && codyfier.checked) {
        codeCesar()
    }
}
function decoder64() {
    var texto = document.querySelector('#texto').value
    if (selecao.value == '3' && decodyfier.checked) {
        valueText = texto
        txtArea.value = atob(valueText)
    } else if (selecao.value == '2' && decodyfier.checked) {
        decodeCesar()
    }
}

//Função de Cifra de Cesar

function codeCesar() {
    var texto = document.querySelector('#texto').value
    var passinhos = document.querySelector('#passos').value
    var stringValue = ""
    for (var i = 0; i < texto.length; i++) {
        var ascii = texto[i].charCodeAt();
        var chave = parseInt(passinhos);
        var encode = ascii + chave;

        if (ascii >= 65 && ascii <= 90) {
            if (encode > 90) {
                encode = encode - 26
            }
            stringValue += String.fromCharCode(encode)
        } else if (ascii >= 97 && ascii <= 122) {
            if (encode > 122) {
                encode = encode - 26
            }
            stringValue += String.fromCharCode(encode)
        } else {
            stringValue += texto[i]
        }

    }
    txtArea.value = stringValue
}

function decodeCesar() {
    var texto = document.querySelector('#texto').value
    var passinhos = document.querySelector('#passos').value
    var stringValue = ""
    for (var i = 0; i < texto.length; i++) {
        var ascii = texto[i].charCodeAt();
        var chave = parseInt(passinhos);
        var decode = ascii - chave;

        if (ascii >= 65 && ascii <= 90) {
            if (decode < 65) {
                decode = decode + 26
            }
            stringValue += String.fromCharCode(decode)

        } else if (ascii >= 97 && ascii <= 122) {

            if (decode < 97) {
                decode = decode + 26
            }
            stringValue += String.fromCharCode(decode)
        } else {
            stringValue += texto[i]
        }

    }

    txtArea.value = stringValue
}

// function decodeCesar() {
//     var texto = document.querySelector('#texto').value
//     var passinhos = document.querySelector('#passos').value
//     var stringValue = ""
//     for (var i = 0; i < texto.length; i++) {
//         var ascii = texto[i].charCodeAt();
//         var chave = parseInt(passinhos);
//         var decode = ascii - chave;

//         if (ascii >= 65 && ascii <= 90) {
//             if (decode < 65) {
//                 decode = decode + 26
//             }
//             stringValue += String.fromCharCode(decode)
//         } else if (ascii >= 97 && ascii <= 122) {
//             if (decode < 97) {
//                 decode = decode + 26
//             }
//             stringValue += String.fromCharCode(decode)
//         } else {
//             stringValue += texto[i]
//         }

//     }
//     txtArea.value = stringValue
// }
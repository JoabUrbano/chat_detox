const lista_de_palavras = document.createElement('script');
lista_de_palavras.src = 'palavras_improprias.js';
document.head.appendChild(lista_de_palavras);

function postar() {

var chat = document.getElementById("chat");
var janela_palavra_impropria = document.getElementById("palavras_improprias");
var texto_entrada = document.getElementById("entrada");
var palavras_da_entrada = texto_entrada.value.split(" ");
var texto_ok = 1;
var palavras_improprias_da_entrada = [];

for(c = 0; c < palavras_da_entrada.length; c++){ //Verifica se há palavras improprias
    for(d = 0; d < palavras_improprias.length; d++){
        if(palavras_improprias[d].toLowerCase() == palavras_da_entrada[c].toLowerCase()){
            texto_ok = 0;
            palavras_improprias_da_entrada.push(palavras_da_entrada[c]);
            palavras_da_entrada[c] = "***";
            }
        }
    }

if(texto_ok == 1){ //Se não há palavras improprias, poste o comentario
    chat.innerHTML += "Visitante: " + texto_entrada.value + "</br>";
    document.getElementById("entrada").value="";
    }
else{ //Se não, emite uma mensagem de alerta e posta a mensagem sensurando as palavras improprias
    janela_palavra_impropria.innerHTML = "Seu comentario foi bloqueado por contem a(s) seguinte(s) palavr(as) ofensiva(s): ";
    for(c = 0; c < palavras_improprias_da_entrada.length; c++){
        janela_palavra_impropria.innerHTML += palavras_improprias_da_entrada[c] + " ";
        palavras_improprias_da_entrada[c] = "***";
        }
    chat.innerHTML += "Visitante: ";
    for(c = 0; c < palavras_da_entrada.length; c++){
        chat.innerHTML += palavras_da_entrada[c] + " ";
    }
    chat.innerHTML += "</br>";
    document.getElementById("entrada").value="";
    }
}
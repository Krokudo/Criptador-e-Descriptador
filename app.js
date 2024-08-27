const area_texto = document.querySelector(".campo__area_texto");
const mensagem = document.querySelector(".campo__mensagem");
const mensagem_titulo = document.querySelector(".mensagem_titulo");
const mensagem_descricao = document.querySelector(".mensagem_descricao");

function btn_encriptar (){
    const texto_encriptado =encriptar(area_texto.value);
    mensagem.value= texto_encriptado;
    area_texto.value="";
    mensagem.style.backgroundImage = 'none';
    mensagem_titulo.textContent = "Código Encriptado";
    mensagem_descricao.textContent = "Mensagem encontrada:";
}

function encriptar (string_encriptada) {

    let matriz_codigo = [["e","enter",],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    string_encriptada=string_encriptada.toLowerCase();
    for(let i= 0;i< matriz_codigo.length; i++) {
        if(string_encriptada.includes(matriz_codigo[i][0])) {
            string_encriptada= string_encriptada.replaceAll(matriz_codigo[i][0],matriz_codigo[i][1]);
        }
    }
    return string_encriptada;
}

function btn_desencriptar (){
    const texto_desencriptado =desencriptar(area_texto.value);
    mensagem.value= texto_desencriptado;
    area_texto.value="";
    mensagem.style.backgroundImage = 'none';
    mensagem_titulo.textContent = "Código Desencriptado";
    mensagem_descricao.textContent = "Mensagem encontrada:";
}

function desencriptar (string_desencriptada) {

    let matriz_codigo = [["e","enter",],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    string_desencriptada=string_desencriptada.toLowerCase();
    for(let i= 0;i< matriz_codigo.length; i++) {
        if(string_desencriptada.includes(matriz_codigo[i][1])) {
            string_desencriptada= string_desencriptada.replaceAll(matriz_codigo[i][1],matriz_codigo[i][0]);
        }
    }
    return string_desencriptada;
}

function btn_copiar (){
    navigator.clipboard.writeText(mensagem.value)
    .then(() => {
      // Opcional: Exiba uma mensagem de sucesso
      alert('Texto copiado!');
    })
    .catch(err => {
      console.error('Falha ao copiar:', err);
    });
    mensagem.style.backgroundImage = "url(img/Boneco.png)";
    mensagem.value="";
    mensagem_titulo.textContent = "Nenhuma mensagem encontrada";
    mensagem_descricao.textContent = "Digite um texto que você deseja criptografar ou descriptografar.:";
}
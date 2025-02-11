
const imagens = [
    "./ccb 1.jpg",
    "./ccb 2.jpg",
    "./ccb 3.jpg",
    "./ccb 4.jpg",
    "./ccb 5.jpg"
]


function trocarImagem() {

    const imagemAtual = imagens.shift(); 
    imagens.push(imagemAtual);

  
    document.body.style.backgroundImage = `url('${imagens[0]}')`;
}

document.getElementById("trocar-imagem").addEventListener("click", trocarImagem);

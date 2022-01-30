// - Lista da esquerda 



// - lista do meio
// - alert right




const criarBotao = (categoria) => {
    const elementPai = document.querySelector('.mainContent') 

    const div = document.createElement('div')
    const span = document.createElement('span')

    div.className = "botao"
    span.textContent = categoria // criando elementos 

                                // adicionando elementos
    elementPai.appendChild(div)
    div.appendChild(span)
}


    


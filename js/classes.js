const criarBotao = (categoria) => {
    const elementPai = document.querySelector('.mainContent');

    const div = document.createElement('div');
    const span = document.createElement('span');

    div.className = "botao";
    span.textContent = categoria;
    elementPai.appendChild(div);
    div.appendChild(span);
};

const createlist = (conteudo) => {

    const ul = document.querySelector('.list');
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.className = 'list-group-item';
    span.textContent = conteudo;

    ul.appendChild(li);
    li.appendChild(span);

};

const createPopUp = (imagem, titulo, alcool, descricao) => {

    const parentElement = document.querySelector('.pop-up');
    const image = document.createElement('img');
    const strong = document.createElement('strong');
    const small = document.createElement('small');
    const butao = document.createElement('button');

    parentElement.className = 'toast-header';
    image.className = 'rounded me-2';
    image.src = imagem;
    image.alt = 'cocktail';
    image.style = 'width: 80px; height: 80px;';
    strong.classList = 'me-auto';
    
    butao.type = 'button';
    butao.className = 'btn-close';
    //butao.data-bs-dismiss = 'toast'; - fazer
    //aria-label="Close" - fazer

    parentElement.appendChild(image);
    parentElement.appendChild(strong);
    parentElement.appendChild(small);
    parentElement.appendChild(butao);

    strong.textContent = titulo;
    small.textContent = alcool;
    small.textContent = descricao;
};

const createSecondDiv = (texto, categoria, glass, detalhes) => {

    const parentElement2 = document.querySelector('.pop-up2');
    const text = document.createElement('p');
    const textCtegory = document.createElement('p');
    const strong = document.createElement('strong')
    const textGlss = document.createElement('p');
    const strong2 = document.createElement('strong');
    const small = document.createElement('small');

    textCtegory.appendChild(strong);
    textGlss.appendChild(strong2);

    parentElement2.className = 'toast-body';
    text.textContent = texto;
    textCtegory.textContent = categoria;
    textGlss.textContent = glass;
    small.textContent = detalhes;

}
/* 
 <div class="toast-body">
    <p#VARIAVEL 4</p>
    <p><strong>Category:</strong>#VARIAVEL 5</p>
    <p><strong>Glass:</strong>
    #VARIAVE 6L</p>
    <small>#VARIAVEL 7</small>
</div>
</div> */


    

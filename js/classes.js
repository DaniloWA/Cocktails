//SideBar
export const criarBotao = (categoria) => {
    const elementPai = document.querySelector('.mainContent');

    const div = document.createElement('div');
    const span = document.createElement('span');

    div.className = "botao";
    span.textContent = categoria;
    elementPai.appendChild(div);
    div.appendChild(span);
};
//Bottom List
export const createlist = (conteudo) => {

    const ul = document.querySelector('.list');
    const li = document.createElement('li');
    const span = document.createElement('span');

    li.className = 'list-group-item';
    span.textContent = conteudo;

    ul.appendChild(li);
    li.appendChild(span);

};

export const createSecondDiv = (texto, categoria, glass, detalhes) => {

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









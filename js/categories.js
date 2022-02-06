const apiCocktail = async (endpoint) => {
    const response = await fetch(endpoint);
    if(response.status !== 200) {
        throw new Error('Not found')
    }
    const data = await response.json();
  
    return data
};

const categorias = () =>  {

    apiCocktail('www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  .then(dataCategories => {

    dataCategories.drinks.sort( (a,b) => a.strCategory > b.strCategory ? 1 : -1);
    console.log(dataCategories);
    
    const botao = document.querySelector('.botaoC');
   
    //criarBotao

    botao.addEventListener('click', e => {
      if(e.target) {
        console.log(e.target)
      }
    })

  })
};

export default categorias;
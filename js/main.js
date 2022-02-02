import generateDrink from './randomDrink.js';
import ingredientsList from "./ingredients.js";
import categories from "./categories.js";
import glassesList from "./glasses.js";
/*import searchByName from "./search";*/

generateDrink();
setInterval( () => { 
    generateDrink()
}, 20000);

categories()
  .then(dataCategories => {

    dataCategories.drinks.sort( (a,b) => a.strCategory > b.strCategory ? 1 : -1);
    
    const botao = document.querySelector('.botaoC')
    const sideBar = document.querySelector('.aside')

    botao = dataCategories.drinks.strCategory

    botao.addEventListener('click', e => {
      if(e.target) {

      }
    })

  })
glassesList()
ingredientsList()


document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

})









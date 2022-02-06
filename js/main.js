import generateDrink from './randomDrink.js';
import {ingredientsList} from "./ingredients.js";
import categorias from "./categories.js";
import glassesList from "./glasses.js";
import searchByName from "./search.js";
import { criarBotao } from './classes.js';


const search = document.querySelector('#formSearch')
const searchInput = document.querySelector('#searchCocktail')
const ulList = document.querySelector('#ulList')


generateDrink();

setInterval( () => { 
    generateDrink()
}, 20000);

categorias();

//glassesList()
//ingredientsList()


search.addEventListener('submit', e => {
  e.preventDefault();
  searchByName(searchInput.value.trim())
  ulList.classList = "card w-100"
})






 



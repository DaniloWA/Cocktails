import { createlist } from "./classes.js";

const apiCocktail = async (endpoint) => {
    const response = await fetch(endpoint);
    if(response.status !== 200) {
        throw new Error('Not found')
    }
    const data = await response.json();
  
    return data;
  };

const searchByName = (name) => {

    apiCocktail( `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(data => {
        data.drinks.forEach(element => {
            if(element.strDrink)
                createlist(element.strDrink)
            else
                console.log('Sem nome de Drink disponivel na API')
        });
 }) 
 .catch(err => { 
     createlist('Digite um Drink valido!')
     console.log('Promise rejeitada', err.message) 
    });
}


export default searchByName;





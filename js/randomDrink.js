const apiCocktail = async (endpoint) => {
    const response = await fetch(endpoint);
    if(response.status !== 200) {
        throw new Error('Not found')
    }
    const data = await response.json();
  
    return data;
  };

const generateDrink = () => {

    apiCocktail("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(data => {
    const imag = document.querySelector('.random')
    const titlee = document.querySelector('.titul');
    const description = document.querySelector('.description');
    const bottomLine = document.querySelector('.line');

    imag.src = data.drinks[0].strDrinkThumb;
    titlee.textContent = data.drinks[0].strDrink;
    description.textContent = data.drinks[0].strInstructions;
    bottomLine.textContent = data.drinks[0].strAlcoholic;
    
 }) 
 .catch(err => { console.log('Promise rejeitada', err.message) });
}

export default generateDrink;



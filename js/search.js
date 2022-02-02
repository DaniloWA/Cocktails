const searchByName = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka');
    if(response.status != 200) {
        throw new Error('Not found')
    }
    const data = await response.json();

    return data;
};

export default searchByName;





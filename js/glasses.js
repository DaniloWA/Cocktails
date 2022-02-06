const glassesList = async () => {
    const response = await fetch('www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
    if(response.status !== 200) {
        throw new Error('Not found')
    }
    const data = await response.json();

    return data;
};

export default glassesList;

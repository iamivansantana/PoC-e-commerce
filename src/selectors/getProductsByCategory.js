
//The method receives the productList(Array) and the price to be used for the search.
export const getProductsByCategory = ( productList, category) => {

    if(category.length === 0) { 
        return productList;
    }

    let concatArray = [];
    category.forEach(element => {
        concatArray = [...concatArray, productList.filter( List => List.category === element)]
    });

    const integrated = concatArray.reduce(function(a,b) {
        return a.concat(b);
    });
    
    return integrated;

}

//The method receives the productList(Array) and the price to be used for the search.
export const getProductsByPrice = ( productList, price = '' ) => {

    if(price === '')return[];

    // console.log(productList, price);

    switch (price) {
        case 'Any Price':
          return productList;

        case '<20':
          return productList.filter( product => product.price < 20 );
        case '>= 20 && <=100':

          return productList.filter( product => product.price >= 20 && product.price<=100);
        case '>=100 && <=200':
          return productList.filter( product => product.price >= 100 && product.price<=200);
        case '>200':
          return productList.filter( product => product.price > 200);

        default:
          return productList;
      }

}


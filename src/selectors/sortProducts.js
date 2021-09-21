
//The method receives the productList(Array) and the price to be used for the search.
export const sortProducts = ( productList, sortValue, orderList) => {


    // console.log(productList,'Recibido',sortValue,orderList);

    switch (sortValue) {
        case 'Price':
            if (orderList) {
                productList.sort(function (a, b){
                    return (a.price - b.price)
                })
            }else{
                productList.sort(function (a, b){
                    return (b.price - a.price)
                })
            }
        break;
        case 'Alphabetically':
            if (orderList) {
                productList.sort((a,b)=>{
                    return (a.name < b.name)?-1:1
                })
            }
            else{
                productList.sort((a,b)=>{
                    return (a.name > b.name)?-1:1
                })
            }
        break;
    
        default:
            break;
    }



    //   if( sortValue === 'Price' && orderList){
    //       productList.sort(function (a, b){
    //         return (a.price - b.price)
    //     });   
    //   }
    //   else if( sortValue === 'Price' && !orderList){
    //       productList.sort(function (a, b){
    //         return (b.price - a.price)
    //     });
    //   }
    //    else if( sortValue === 'Alphabetically' && orderList){
    //       productList.sort((a,b)=>{
    //          return (a.name < b.name)?-1:1
    //      });
    //   }
    //    else if( sortValue === 'Alphabetically' && !orderList){
    //      productList.sort((a,b)=>{
    //          return (a.name > b.name)?-1:1
    //      });
    //   }


    //    else if( sortValue === 'Alphabetically' && orderList === true){
    //      sortArray = productList.sort(function (a, b) {
    //         if (a.name > b.name) {
    //           return 1;
    //         }
    //         if (a.name < b.name) {
    //           return -1;
    //         }
    //         // a must be equal to b
    //         return 0;
    //       });
    //   }
    //   else if( sortValue === 'Alphabetically' && orderList === false){
    //      sortArray = productList.sort(function (a, b) {
    //         if (b.name > a.name) {
    //           return 1;
    //         }
    //         if ( b.name <  a.name) {
    //           return -1;
    //         }
    //         // a must be equal to b
    //         return 0;
    //       });
    //   }

    //   return sortArray;



    

    
    // console.log(sortArray);
    //   console.log(sortArray,'respuesta');

}



// Effect to change the sorting   
// useEffect(() => {
//     if(productListToShow.length === 0)return;
//     console.log(productListToShow);

//     const productsSorting = sortProducts(productListToShow,sortValue,orderList);


//     setProductListToshow(productsSorting);

//     console.log(productsSorting);

// }) ;
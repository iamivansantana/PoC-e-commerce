//The method receives the productList(Array) and the values to change the sort
export const sortProducts = (productList, sortValue, orderList) => {
	switch (sortValue) {
		case 'Price':
			if (orderList) {
				productList.sort(function (a, b) {
					return a.price - b.price;
				});
			} else {
				productList.sort(function (a, b) {
					return b.price - a.price;
				});
			}
			break;
		case 'Alphabetically':
			if (orderList) {
				productList.sort((a, b) => {
					return a.name < b.name ? -1 : 1;
				});
			} else {
				productList.sort((a, b) => {
					return a.name > b.name ? -1 : 1;
				});
			}
			break;

		default:
			break;
	}
};

import { types } from '../../types/types';


 const articlesReducer = ( state = [], action) => {
    switch (action.type) {
        
        case types.addShoppingCart:
            return [...state,
                action.payload
            ];

        case types.cleanShoppingCart:
            return [];


        default:
           return state;
    } 
}

export default articlesReducer;
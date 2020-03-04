import { GET_PRODUCTS } from "../actionTypes";
import { ADD_ITEMS_TO_CART } from "../actionTypes";

const initialState = {
  getItems : '',
  addedItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      console.log('calling reducers');
      return {
        ...state,
        getItems: action.payload
      };
    }
    case ADD_ITEMS_TO_CART: {
      return {
        ...state,
        addedItems: action.payload
      };
    }
    default: {
      return state;
    }
  }
}

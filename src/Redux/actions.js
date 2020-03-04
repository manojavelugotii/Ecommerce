import { GET_PRODUCTS } from './actionTypes';
import { ADD_ITEMS_TO_CART } from './actionTypes';

export const getProducts = () => dispatch => {
	console.log('calling action')
	fetch('http://localhost:4000/getProducts', {
		method  : 'get',
		headers : {
			'Content-Type' : 'application/json'
		},
	}).then((resp) => resp.json())
		.then(function(respObj) {
			console.log(respObj);
			dispatch({
				type    : GET_PRODUCTS,
				payload : respObj.products
			})
			
		})
	}
	export const addingItemsToCart = (addingItems) => async dispatch => {
		try {
			let response = await fetch('http://localhost:4000/addingItemsToCart', {
			method  : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(addingItems)
		})
		let responseJson = await response.json();
		console.log(responseJson); 
		dispatch({
			type    : ADD_ITEMS_TO_CART,
			payload : responseJson
		})

	} catch (err) {
		console.error(err);
	}
}
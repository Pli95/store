import * as types from '../actions/actionTypes'


export default function productsReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_CART:
      const idx = state.findIndex(i => i.id === action.product.id)
      if(idx === -1) {
        const product = {...action.product}
        product.qty = 1
        return [...state, product];
      }
      else {
        const newCart = [...state]
        newCart[idx].qty += 1
        return newCart
      }
    default:
      return state;
  }
}

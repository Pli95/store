import * as types from '../actions/actionTypes'


export default function productsReducer(state = [], action) {
  const idx = state.findIndex(i => i.id === action.product.id);
  const newCart = [...state]
  switch (action.type) {
    case types.ADD_CART:
      if(idx === -1) {
        const product = {...action.product}
        product.qty = 1
        return [...state, product];
      }
      else {
        newCart[idx].qty += 1
        return newCart
      }
    case types.ADD_QTY:
      newCart[idx].qty += 1
      return newCart
    case types.DELETE_QTY:
      newCart[idx].qty -= 1
      return newCart
    case types.DELETE_PRODUCT:
      newCart.splice(idx, 1)
      return newCart
    default:
      return state;
  }
}

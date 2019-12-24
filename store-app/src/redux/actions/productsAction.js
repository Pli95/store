import * as types from './actionTypes'

export function getProducts(products) {
  return {type: types.SET_PRODUCTS, products}
}

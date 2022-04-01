import * as type from './mutation-types'
import Axios from 'axios'

export const getProducts = ({ commit }) => {
    Axios.get('http://localhost:8081/products').then(resp => {
        console.log(resp.data)
        commit(type.GET_PRODUCTS, resp.data)
    })
}
export const addProducts = ({ commit }, add ) => {
    Axios.post('http://localhost:8081/products', add).then((resp) => {
         commit(types.ADD_PRODUCTS, resp.data)
    })
 }

import * as type from './mutation-types'
import Axios from 'axios'

export const getProducts = ({ commit }) => {
    Axios.get('http://localhost:8081/products').then(resp => {
        console.log(resp.data)
        commit(type.GET_PRODUCTS, resp.data)
    })

}
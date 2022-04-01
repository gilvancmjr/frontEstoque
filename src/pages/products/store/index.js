import state from './state';
import mutations from './mutations';
import * as actions from './actions'
import mutationType from './mutation-types'

export default {
    state,
    mutations,
    mutationType,
    actions,
    namespaced: true
}
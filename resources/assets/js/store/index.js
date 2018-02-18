import Vue from 'vue'
import Vuex from 'vuex'
import coordinates from './modules/coordinates'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        coordinates,
    },
})
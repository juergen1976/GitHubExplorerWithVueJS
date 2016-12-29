import Vue from 'vue';
import Vuex from 'vuex';


import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0,
        title: 'GitHub Explorer with VueJS',
        users:  []
    },
    getters,
    actions,
    mutations
});
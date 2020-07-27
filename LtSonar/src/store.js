/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use( Vuex, Axios )

// Modules
import ModelStore from '@/store/modelStore'
import PlayerStore from '@/store/playerStore'
import GameStore from '@/store/gameStore'
import ChatStore from '@/store/chatStore'

const data = new Connection();

// Store with modules
const store = new Vuex.Store({
    modules: {
        ModelStore,
        PlayerStore,
        GameStore,
        ChatStore,
    }
});

//      OR

// Store with local definitions
//const store = new Vuex.Store({ state, mutations, actions, getters });

export default store;
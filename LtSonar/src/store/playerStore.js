/*
VUEX Data Store.
Copyright (c) 2019. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'

//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Player from '@/model/player'

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        player: new Player(),
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {

        setName({ commit }, name ){
            commit('SET_NAME', name);
        },

        setRole({ commit }, role ){
            commit('SET_ROLE', role);
        }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_NAME: ( state, name ) => { state.player.name = name },
        SET_ROLE: ( state, role ) => { state.player.role = role },
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        playerName: state => state.player.name,
        playerRole: state => state.player.role,
    },
}

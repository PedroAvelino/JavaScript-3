/*
VUEX Data Store.
@copyright (c) 2020. Alejandro Lopez. All Rights Reserved.
*/
import Vue from 'vue'
import Vuex from 'vuex'


//const baseURL = `${LOCATION.PROTOCOL}//${LOCATION.HOSTNAME}:${LOCATION.PORT}`;
//const Remote = Axios.create( { baseURL: baseURL });

// import User from '@/model/user' // import POJS model objects
import Captain from '@/model/captain'
import Navigator from '@/model/navigator'
import Engineer from '@/model/engineer'

export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        captain: new Captain([8,8], []),
        navigator: new Navigator([], []),
        engineer: new Engineer()
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {
        setPosition({ commit }, position){
            commit('SET_POSITION', position);
        },

        addDirection({ commit }, direction ){
            commit('ADD_DIRECTION', direction);
        },

        addNavPosition({ commit }, navPosition){
            commit('ADD_NAVPOSITION', navPosition);
        },

        setNavPosition({ commit }, navPositions){
            commit('SET_NAVPOSITION', navPositions);
        },

        addNavHistory({ commit }, navDirection){
            commit('ADD_NAVDIRECTION', navDirection);
        },
        
        setNavHistory({ commit }, navDirections){
            commit('SET_NAVDIRECTION', navDirections);
        },
        addSymbol({ commit }, data){
            commit('ADD_SYMBOL', data);
        },
        crossSymbol({ commit }, data){
            commit('CROSS_SYMBOL', data);
        },
        clearSymbol({ commit }){
            commit('CLEAR_SYMBOL');
        },
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_POSITION: ( state, position ) => { state.captain.position = position },
        ADD_DIRECTION: ( state, direction ) => { state.captain.history.push(direction) },
        ADD_NAVPOSITION: ( state, navPosition ) => { state.navigator.positions.push(navPosition) },
        SET_NAVPOSITION: ( state, navPositions ) => { state.navigator.positions = navPositions},
        ADD_NAVDIRECTION: ( state, navDirection ) => { state.navigator.history.push(navDirection)},
        SET_NAVDIRECTION: ( state, navDirections ) => { state.navigator.history = navDirections},
        ADD_SYMBOL: ( state, symbolData) => { state.engineer.addToGroup(symbolData)},
        CROSS_SYMBOL: ( state, data) => { state.engineer.crossSymbol(data)},
        CLEAR_SYMBOL: ( state) => { state.engineer.symbolGroup = []},
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        captainPosition: state => state.captain.position,
        captainHistory: state => state.captain.history,
        navigatorPositions: state => state.navigator.positions,
        navigatorHistory: state => state.navigator.history,
        engineerSymbolGroup: state => state.engineer.symbolGroup,
    },
}

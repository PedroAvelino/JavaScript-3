/* Copyright (C) 2020 Pedro Avelino, All Rights Reserved */


// import User from '@/model/user' // import POJS model objects

import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import Player from '@/model/Player'

import Connection from '@/store/Connection'

const ERROR_OK = 0;
const ERROR_NAME_IN_USE = 100;
const ERROR_ROLE_IN_USE = 101;



export default {
    // PRIVATE: model state of the application, a bunch of POJS objects
    state: {
        player: new Player(),
        errorStatus: ERROR_NAME_IN_USE,
        errCode: -1,
        errorMessage: "All OK",
        chatMessages: []
    },

    // PUBLIC: injected into components
    // called to do things to the state via ajax and mutations
    actions: {

        //Set name for player
        setName({ commit }, name ){

            
            let payload = {
                playerName: name
            }

            data.post("/api/player/login", payload )
                .then( response => response.data )
                .then( data => (data.error ? error => { throw( error )} : data.payload ))
                .then( responseData => {
                    // post/put some data via REST API to server
                    // on success response

                    //Get new name from the response data 
                    let newData = JSON.parse(responseData);

                    //Set player name by the result given
                    commit('SET_NAME', newData.payload.name );
                })
                .catch( error => {
                    // else
                    // failure set some status.
                    commit('SET_NAME_ERROR', ERROR_NAME_IN_USE );

                    console.log ("newName2");
                });
        },

        //Set role for player
        setRole({ commit }, role ){
            commit('SET_ROLE', role);
            // Axios.post("/api/player/role", role )
            //     .then( response => response.data )
            //     .then( data => (data.error ? error => { throw( error )} : data.payload ))
            //     .then( responseData => {
            //         // post/put some data via REST API to server
            //         // on success response
            //     })
            //     .catch( error => {
            //         // else
            //         // failure set some status.
            //         commit('SET_ROLE_ERROR', ERROR_ROLE_IN_USE );
            //     });

        },

        clearError({ commit }) { commit('SET_NAME_ERROR', ERROR_OK ) },
        addMsg({ commit },  newMsg = "") { commit('ADD_MSG', msg ) }
    },

    // PRIVATE: caled by actions to modify the state to prevent deadlock
    mutations: {
        SET_NAME: ( state, name ) => { state.player.name = name },
        SET_NAME_ERROR: ( state, errCode ) => state.errCode = errCode,
        SET_ROLE: ( state, role ) => { state.player.role = role },
        SET_ROLE_ERROR: ( state, errCode ) => state.errCode = errCode,
        ADD_MSG: ( state, msg ) => {
            state.chatMessages.splice( state.chatMessages.length, msg );
        },
    },

    // PUBLIC: injected into components
    // called to retrieve state data from the store
    getters: {
        playerName: state => state.player.name,
        playerRole: state => state.player.role,

        error:      state => state.errorStatus,
        errorMessage: state => state.errorMessage,
    },
}

'use strict';

import Express from 'express';
import Result from '../../lib/Result'

import Player from '../model/Player'

const teamA = [];

//We have an empty player at the start
let currentPlayer = new Player();

const Router = Express.Router();

Router.post('/login', ( request, response ) => {
    
    let params = {...request.params,...request.query,...request.body,};

    let name =  params.playerName; //data = { nickname: String, team: String }

    //contruct the response data
    let resp = new Result();

    //Build the player
    let player = new Player();
    player.name = name;
    player.role = "Captain";

    //TODO: add player to team
    // teamA.push( player );

    //response data
    resp.content.payload = player;
    //resp.ok();
    response.send( resp.serialize() );

});

Router.post('/leave', (request, response) => {

    let data = request.body //data = { nickname: String, team: String }
    
});

Router.get('/stats', (request, response) => {

    let data = request.body //data = { nickname: String, team: String }
    
});


Router.post('/role', (request, response) => {

    let data = request.body //data = { nickname: String, team: String }
    
});



export default Router;
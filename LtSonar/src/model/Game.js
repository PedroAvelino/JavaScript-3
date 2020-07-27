/* Copyright (C) 2020 Pedro Avelino, All Rights Reserved */
'user strict';

import CREW from '@/model/Player'
import Boat from '@/model/Boat'
import Team from '@/model/Team'
import Chat from '@/model/Chat'


export const PHASE = {
    LOBBY: 0,
    INGAME: 1,
    RESULTS: 2
}

export default class Game {

    constructor(){
        
        //Initialize the map of the game
        this.map = new GameMap()

        this.gameState = {
            phase: PHASE.LOBBY,
            current: {
                teamId: TEAM.A,
                crewId: ROLE.CAPTAIN,
            },
            playerCount: 0,
            teamList: []
            map: new GameMap('alpha'),
        }

        //status of the match
        this.status = {
            teamTurn: CREW.TEAM.A,
            roleTurn: CREW.ROLE.RADIO,
            
        };

        //The boats
        this.subList = [
            new Boat( CREW.TEAM.A ),
            new Boat( CREW.TEAM.B )
        ];
        
        //The teams
        this.gameState.teamList = [
            new Team( CREW.TEAM.A, this.subList[ CREW.TEAM.A ] ),
            new Team( CREW.TEAM.B, this.subList[ CREW.TEAM.B ] )
        ];

        //Create chats for teams
        this.chatList = [
            new Chat ( CREW.TEAM.A ),
            new Chat ( CREW.TEAM.B)
            new Chat ( CREW.TEAM.GLOBAL ) 
        ]
    }

    //TODO: Move the boat based on the team
}

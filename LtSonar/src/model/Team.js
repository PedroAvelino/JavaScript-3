/* Copyright (C) 2020 Pedro Avelino, All Rights Reserved */
'user strict';

import CREW from '@/model/Player'
import Boat from '@/model/Boat'

export const TEAM = {
    UNKNOWN: -1,
    A:       0,
    B:       1,
    GLOBAL:  2,
    TEAMNAME: ["Unknown", "Team A", "Team B", "Global"]
}

export default class Team {

    constructor( nameId = CREW.TEAM.UNKNOWN){

        this.nameId = nameId

        //The players of this team
        this.playerList =[]
    }

    get name() { return TEAM.TEAMNAME[this.nameId + 1] }

    //Add the player to the team
    add( aPlayer = null ){

        if( !aPlayer )
            return;

        this.playerList.push( aPlayer );
    }
}

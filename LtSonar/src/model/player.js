/* Copyright (C) 2020 Pedro Avelino, All Rights Reserved */
'user strict';

import { TEAM } from './Team'


export const ROLE = {
    UNKNOWN: -1,
    RADIO: 0,
    CAPTAIN, 1,
    XO: 2,
    ENGINEER: 3,
    ROLENAME: ["Unknown", "Radio Officer", "Captain", "First Officer", "Engineer"]
}


export default class Player{

    constructor( name = "unknown", roleId = ROLE.UNKNOWN, teamId = TEAM.A) {
        
        this.name = name;
        this.roleId = roleId;
        this.teamId = teamId;
    }

    get role() { return ROLE.ROLENAME [ this.roleId + 1] }
    get team() { return TEAM.TEAMNAME [ this.teamId + 1] }

    serialize(){
        return JSON.stringify(this);
    }

    deserialize( JSONString ){

    }
}
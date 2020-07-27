/* Copyright (C) 2020 Pedro Avelino, All Rights Reserved */
'user strict';

import CREW from '@/model/Player'

export default class Chat{

    constructor( teamId = CREW.TEAM.UNKNOWN ) {
        
        this.team = teamId

        this.log = "";


    }

    serialize(){

    }

    deserialize(){

    }
}
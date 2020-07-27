/* Copyright (C) 2020 Pedro Avelino, All Rights Reserved */
'user strict';

import CREW from '@/model/Player'

export default class Boat {

    constructor( teamId = CREW.TEAM.UNKNOWN ){

        this.location = { row: 0, col: 0}
        
        this.hits = 4

        this.status = {
            systems: {
                mines: 2,
                drones: 3,
                silent: 5,
                torpedos: 3,
                sonar: 2,
                scanrio: 3
            },
            engineering:{
                north: {},
                south: {},
                east: {},
                west: {}
            }
        }
    }
}

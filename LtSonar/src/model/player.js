/* Copyright (C) 2020 Pedro Avelino, All Rights Reserved */
'user strict';

export default class Player{

    constructor( name = "unknown", role = "unknown") {
        
        this.name = name;
        this.role = role;
    }

    serialize(){
        return JSON.stringify(this);
    }

    deserialize( JSONString ){

    }
}
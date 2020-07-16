/*
Copyright (C) 2020 Pedro Avelino

Result is a POJS thing we can get back from a server
 */

 export default class Result{

    constructor( errorCode = -1, errorMsg = "Unknown Error", payload = {})
    {
        this.content = {
            payload: {

            },
            error: errorCode,
            errorMsg: errorMsg

        };
    }

    ok(){
        this.content.error = 0;
        this.content.errorMsg = "";

        return this;
    }

    serialize(){

        return JSON.stringify( this.content );
    }
 }
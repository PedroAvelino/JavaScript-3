//FIREBASE
import * as firebase from "firebase/app"

//Add firebase services
import "firebase/auth"
import "firebase/firestore"


/* Copyright (C) 2020 Pedro Avelino, All rights reserved */
'use strict';

export default class Connection{

    constructor(){
        //TODO:initialize connection to firebase

        let config = {
            apiKey: "AIzaSyDSooZGnwi4Hd12iG_iTjhUKU1v6Gm92sY",
            authDomain: "ltsonar.firebase.com",
            databaseURL: "https://ltsonar.firebase.com",
            projectId: "ltsonar",
            storageBucket: "ltsonar.appspot.com",
            messagingSenderId: "417789009359",
            appId: "ltsonar",
            measurementId: "G-measurement-id",
        }

        firebase.initializeApp( config )
        
        
        this.dataStore = firebase.firestore();


    }

    //TODO: GET
    get() {

        //peel edge out info identify the collection
        //take api/player/action => collection = player, action = ???
        let collectionType = "Players"
        // firebase calls
        return new Promise( (resolve, rejects) => {

            let collection = this.datastore.data.collection( collectionType );
            let query = collection.where("name", "==", data.name );
            query.get()
                .then( resultsList => {
                    resultsList.docs.forEach( doc => {
                        //Assuming only one matches
                        resolve( resultsList.docs[0] );
                    })
                    .catch( error => rejects( error ))
                })
        });
    }

    //TODO: Post to firebase server
    post( edge, data ) {


    }
}
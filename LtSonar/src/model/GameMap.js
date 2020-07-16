'use strict';

 const MAP_SIZE = 15;


 export default class GameMap{

    constructor(){

        this.grid = [];
        for (let i = 0; i < MAP_SIZE; i++) {
            
            this.grid[i] = [];
            for (let j = 0; j < MAP_SIZE; j++) {
                this.grid[i][j] = [];
            }
        }
    }

    add( ship, row, col ){

        this.grid[row][col] = ship;
    }

    move( ship, from, to ){

        this.grid[to.row][to.col] = ship;
        this.grid[from.row][from.col] = null;
    }
 }
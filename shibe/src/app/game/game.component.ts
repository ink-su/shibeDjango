import { Component, OnInit } from '@angular/core';
import { Shibe } from '../shibe'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  shibe: Shibe = {
    id: 1,
    name: 'mr shiba',
    colour: 'orange',
    love: 30
  }



  constructor() { }
  ngOnInit() {
  }

}




/******************************
    VARIABLE DECLARATIONS
*******************************/


//dog types in the cloud
let wildDogs: string[] = [

];

//dog types in possession
let ownedDogs: string[] = [

];

//toy types in the cloud
let wildToys: [string, number][] = [
  ['bone', 1]

];

//toy types in possession
let ownedDogs: string[] = [

];

//room status
let expanded: boolean = false

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

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

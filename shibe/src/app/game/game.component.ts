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
//wildDogs: Array<[dog name, rarity]>
let wildDogs: Array<[string, number]> = [
  ['yellow', 10],
  ['christophe', 8],
  ['ella', 1],
  ['michelle', 2],
  ['yamomomo', 6],
  ['colin', 9],
  ['john legend', 3],
  ['pompom', 3],
  ['dognald glover', 3],
  ['julie', 3],
  ['tofu-chan', 10],
];

//dog types in possession
let ownedDogs: string[] = [

];

//toy types in the cloud
//wildToys: Array<[toy name, rarity]>
let wildToys: Array<[string, number]> = [
  ['ball', 10],
  ['bone', 10],
  ['cat', 5],
  ['cubert', 5],
  ['duck', 8],
  ['mallows', 7],
  ['mrberry', 2],
  ['poro', 3],
];

//toy types in possession
let ownedDogs: string[] = [

];

//room status
let expanded: boolean = false

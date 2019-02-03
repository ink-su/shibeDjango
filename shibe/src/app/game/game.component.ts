import { Component, OnInit } from '@angular/core';
import { Shibe } from '../shibe'
import { Owner } from '../owner'

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

  shibes: Shibe[] = [
    { id: 1, name: 'Yellow', colour: 'orange', love: 0, rarity: 10 },
    { id: 2, name: 'Christopphe', colour: 'orange', love: 0, rarity: 10 },
  ];

  selectedShibe: Shibe;
  onSelect(shibe: Shibe): void {
    this.selectedShibe = shibe;
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
let shibes: Shibe[] = [
  { id: 1, name: 'Yellow', colour: 'orange', love: 0, rarity: 10, age: 0 },
  { id: 2, name: 'Christopphe', colour: 'orange', love: 0, rarity: 10, age: 0 },
];

//dog types in possession
let ownedDogs: Shibe[] = [
  { id: 3, name: 'Mr. Shibe', colour: 'orange', love: 10, rarity: 10, age: 0 },
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
let ownedToys: string[] = [

];

//room status
let expanded: boolean = false

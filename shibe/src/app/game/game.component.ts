import { Component, OnInit } from '@angular/core';
import { Shibe } from '../shibe'
import { Owner } from '../owner'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {


  shibes: Shibe[] = [
    { id: 1, name: 'Yellow', colour: 'orange', love: 0, rarity: 10, age: 0},
    { id: 2, name: 'Christopphe', colour: 'orange', love: 100, rarity: 10, age: 0 },
    { id: 3, name: 'Ella', colour: 'orange', love: 100, rarity: 5, age: 0 },
    { id: 4, name: 'Michelle', colour: 'pink', love: 10000000, rarity: 5, age: 0 },
    { id: 5, name: 'Yamomomo', colour: 'orange', love: 0, rarity: 10, age: 0 },
    { id: 6, name: 'Colin', colour: 'orange', love: 0, rarity: 10, age: 0 },
    { id: 7, name: 'John Legend', colour: 'orange', love: 0, rarity: 10, age: 0 },
    { id: 8, name: 'Pompom', colour: 'orange', love: 0, rarity: 10, age: 0 },
    { id: 9, name: 'Julie', colour: 'orange', love: 0, rarity: 10, age: 0 },
    { id: 10, name: 'Mr. Shibe', colour: 'orange', love: 0, rarity: 10, age: 0 },
  ];
  ownedShibes: Shibe[] = [
    { id: 2, name: 'Christopphe', colour: 'orange', love: 100, rarity: 10, age: 0 },
    { id: 3, name: 'Ella', colour: 'orange', love: 100, rarity: 5, age: 0 },
  ];

  selectedShibe: Shibe;
  onSelect(shibe: Shibe): void {
    this.selectedShibe = shibe;
  }

  constructor() { }
  ngOnInit() {
  }

}

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

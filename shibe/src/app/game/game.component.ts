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

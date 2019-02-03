import { Component, OnInit } from '@angular/core';
import { Shibe } from '../game-objects/shibe'
import { SHIBES } from '../game-objects/shibes'

@Component({
  selector: 'app-dogalog',
  templateUrl: './dogalog.component.html',
  styleUrls: ['./dogalog.component.scss']
})
export class DogalogComponent implements OnInit {

  shibes = SHIBES;
  selectedShibe: Shibe = this.shibes[0];

  constructor() { }

  ngOnInit() {
  }

  onSelect(shibe: Shibe): void {
    this.selectedShibe = shibe;
  }

}

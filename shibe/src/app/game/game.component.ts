import { Component, OnInit } from '@angular/core';
import { Shibe } from '../game-objects/shibe'
import { SHIBES } from '../game-objects/shibes'
import { Toy } from '../game-objects/toy'
import { TOYS } from '../game-objects/toys'
import { Owner } from '../game-objects/owner'
import { POSES } from '../game-objects/poses'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  shibes: Shibe[] = SHIBES;
  toys: Toy[] = TOYS;
  poses: string[] = POSES

  ownedShibes: Shibe[] = [
    { id: 2, name: 'Christopphe', colour: 'orange', love: 100, rarity: 10, age: 0, pose: "sitting" },
    { id: 3, name: 'Ella', colour: 'orange', love: 100, rarity: 5, age: 0, pose: "sitting" },
  ];

  selectedShibe: Shibe;
  onSelect(shibe: Shibe): void {
    this.selectedShibe = shibe;
  }

  constructor() { }
  ngOnInit() {
  //  drawDogs();
  }
}
/*
  //function to draw ownedShibes
  function drawDogs() {
    //clearss dogs usedPoses and sets setOfPoses to poses
    document.getElementById('dog-container').innerHTML = "";
    var usedPoses = [];
    var setOfPoses = poses;
    //loops through ownedDogs
    for(var i = 0 ; i < ownedDogs.length ; i++ ) {
      //(Math.random() * x) where x is # of poses -- randomly generates a poseID
      var poseID = Math.Ceiling((Math.random() * setOfPoses.length))
      //inserts doge at index i in ownedDogs in pose poseID
      document.getElementById('dog-container').innerHTML +=
          `<div class='dog' style='top:${pose[poseID].top}px;
          left:${pose[poseID].left}px;'>
          <img src='../../assets/images/shibes/shibe${ownedDogs[i]}_${pose[poseID].name}'>
          </div>`;
      //appends poseID to usedPoses Array
      usedPoses.push({
            name: pose[poseID].name,
            top: pose[poseID].top,
            left: pose[poseID].left,
        });
      //removes pose from setOfPoses Array
      setOfPoses.splice(poseID, 1);
    }
  }
}
*/


//room status
//let expanded: boolean = false

//poses
//make objects here with pose name and left and top locations

import { Component, OnInit } from '@angular/core';
import { DogalogComponent } from '../dogalog/dogalog.component'
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
  selectedShibe: Shibe;

  ownedShibes: Shibe[] = [
    { id: 2, name: 'Christopphe', colour: 'orange', love: 100, rarity: 10, age: 0, pose: "sleeping" },
    { id: 3, name: 'Ella', colour: 'orange', love: 100, rarity: 5, age: 0, pose: "sitting" },
  ];

  // function deckarations


  // initializers
  constructor() { }
  ngOnInit() {
    //this.drawDogs();
  }

  // function definitions
  // drawDogs() places your shibes in scene with random positions and poses
  drawDogs(): void;
  drawDogs() {

    //clears dogs
    document.getElementById('dog-container').innerHTML = "";
    //loops through ownedDogs
    let shibeLen = this.ownedShibes.length;
    //let poseLen = this.poses.lenth;
    for(let i = 0 ; i < shibeLen ; i++ ) {
      //(Math.random() * x) where x is # of poses -- randomly generates a poseID
      //var poseIndex = Math.floor(Math.random() * poseLen);
      //inserts doge at index i in ownedDogs in pose poseID

  /*    var div = document.getElementById('dog-container');
      var img = document.createElement("img");
      img.setAttribute('src', '../../assets/images/shibes/shibeY_sitting.gif');
      img.setAttribute('class', 'dog');
      div.innerHTML.appendChild(img);
      for some reason my img DOM object is a string so i cannot appendChild
  */

    }
    console.log("shibes drawn");
  };



/*
`<img src='../../assets/images/shibes/shibeY_${this.shibes[0].pose}.gif' class='dog'>`;
`<h1>why is he so big???</h1>`;


*/
/*
`<div class='dog' style='top:${pose[poseId].top}px;
left:${pose[poseIndex].left}px;'>
<img src='../../assets/images/shibes/shibe${ownedDogs[i]}_${pose[poseIndex].name}'>
</div>`;
*/




}
/*
  //function to draw ownedShibes

}
*/


//room status
//let expanded: boolean = false

//poses
//make objects here with pose name and left and top locations

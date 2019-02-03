import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}

// dog movement

$(document).mousemove(function (e) {
  //get location of cursor
  let x = e.pageX;
  let y = e.pageY;
  let height = ($('#loader').height() / 2.2)
  //
  $('#loader').css({'left': x, 'top': y});
  $('#loader-shadow').css({'left': x, 'top': y + height});
});

//animation

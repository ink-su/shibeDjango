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
  //get direction of cursor
  let height = ($('#loader').height() / 2.2);
  let width = ($('#loader').width());
  //direct dog to correct location
  $('#loader').css({'left': x - width, 'top': y});
  $('#loader-shadow').css({'left': x - width, 'top': y + height});
});

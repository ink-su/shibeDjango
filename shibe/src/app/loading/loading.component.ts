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
  let offset = $('#loader').offset()
  //direct dog to correct location
  //X axis
  if x > offset.left {
    $('#loader').css({'left': offset.left + 20});
  } else if x < offset.left {
    $('#loader').css({'left': offset.left - 20});
  }
  //Y axis
  if y > offset.top {
    $('#loader').css({'top': offset.top + 20});
  } else if y < offset.top {
    $('#loader').css({'top': offset.top - 20});
  };
  $('#loader-shadow').css({'left': x, 'top': y + height});
});

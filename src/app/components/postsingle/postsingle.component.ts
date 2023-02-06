import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-postsingle',
  templateUrl: './postsingle.component.html',
  styleUrls: ['./postsingle.component.css']
})

export class PostsingleComponent implements OnInit {

  single: any;

  constructor(private _location: Location) { }

  ngOnInit() {
    this.single = history.state;
    // console.log(history.state);
  }

  backBtn() {
    this._location.back();
  }

}

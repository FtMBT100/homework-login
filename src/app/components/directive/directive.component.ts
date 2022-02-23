import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  student = [{name:'Mickey',email:'benz@hotmail.com',major:'CS',years:'second'},
  {name:'gigor',email:'gigor@hotmail.com',major:'CS',years:'third'},
  {name:'gorgi',email:'gorgi@hotmail.com',major:'AS',years:'second'},
  {name:'gigi',email:'gigi@hotmail.com',major:'MA',years:'third'}];
  constructor() { }

  ngOnInit(): void {
  }

}

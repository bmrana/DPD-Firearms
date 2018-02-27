import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
  colors= [
    { value: 0, name: "Red" },
    { value: 1, name: "Blue" }, 
    { value: 2, name: "Green" }
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-firearm-type-filter',
  templateUrl: './firearm-type-filter.component.html',
  styleUrls: ['./firearm-type-filter.component.css']
})
export class FirearmTypeFilterComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  selected: string;

  constructor() { }

  ngOnInit() {
    this.selected = 'duty';
  }

  onToggleSelected() {
    this.notify.emit(this.selected);
  }
}

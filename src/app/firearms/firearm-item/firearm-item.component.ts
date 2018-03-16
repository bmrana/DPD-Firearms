import { Firearm } from './../firearm.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-firearm-item',
  templateUrl: './firearm-item.component.html',
  styleUrls: ['./firearm-item.component.css']
})
export class FirearmItemComponent implements OnInit {
  @Input() firearm: Firearm;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

  setVisible() {
    switch (this.type) {
      case 'duty':
        return (this.firearm.firearmType === 'Handgun - Duty') ? true : false;
      case 'secondary':
        return (this.firearm.firearmType === 'Handgun - Secondary') ? true : false;
      case 'rifle':
        return (this.firearm.firearmType === 'Rifle - Duty') ? true : false;
      case 'precision':
        return (this.firearm.firearmType === 'Rifle - Precision') ? true : false;
      case 'all':
        return true;
    }
  }
}

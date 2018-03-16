import { Component, OnInit, Input } from '@angular/core';

import { PrettyDatePipe } from './../../shared/pipes/pretty-date.pipe';
import { Qualification } from '../qual.model';

@Component({
  selector: 'app-qual-item',
  templateUrl: './qual-item.component.html',
  styleUrls: ['./qual-item.component.css']
})
export class QualItemComponent implements OnInit {
  @Input() qual: Qualification;
  @Input() type: string;
  result: string;
  prettyDate: Date;

  constructor(private prettyDatePipe: PrettyDatePipe) { }

  ngOnInit() {
    this.prettyDate = this.prettyDatePipe.transform(this.qual.qual_date);
    this.result = this.qual.score > 69 ? 'PASS' : 'FAIL';
  }

  getImage(base64Data): string {
    const imageData = 'data:image/jpeg;base64,' + base64Data;

    return imageData;
  }

  getColor() {
    const color = this.result === 'PASS' ? 'green' : 'red';
    return color;
  }

  setVisible() {
    switch (this.type) {
      case 'duty':
        return (this.qual.firearmType === 'Handgun - Duty') ? true : false;
      case 'secondary':
        return (this.qual.firearmType === 'Handgun - Secondary') ? true : false;
      case 'rifle':
        return (this.qual.firearmType === 'Rifle - Duty') ? true : false;
      case 'precision':
        return (this.qual.firearmType === 'Rifle - Precision') ? true : false;
      case 'all':
        return true;
    }
  }
}

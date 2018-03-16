import { Qualification } from './qual.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class QualServiceService {
  quals: Qualification[];

  constructor() { }

  setQuals(qualifications) {
    this.quals =  qualifications;
  }
}

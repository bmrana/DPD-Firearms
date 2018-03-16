import { Firearm } from './firearm.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FirearmsService {
  firearms: Firearm[];
  lookupValues: any[];

  constructor() { }

  setFirearms(firearms) {
    this.firearms = firearms;
  }

  addFirearm(firearm: Firearm) {
    this.firearms.push(firearm);
  }

  setLookupValues(values) {
    this.lookupValues = values;
  }
}

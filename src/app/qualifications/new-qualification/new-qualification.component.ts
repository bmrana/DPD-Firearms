import { NgForm } from '@angular/forms';
import { PeopleService } from './../../people/people.service';
import { User } from '@microsoft/microsoft-graph-types';
import { Component, OnInit } from '@angular/core';
import { Firearm } from '../../firearms/firearm.model';
import { FirearmsService } from '../../firearms/firearms.service';

@Component({
  selector: 'app-new-qualification',
  templateUrl: './new-qualification.component.html',
  styleUrls: ['./new-qualification.component.css']
})
export class NewQualificationComponent implements OnInit {
  user: User;
  imageUrl: string;
  firearms: Firearm[];
  sightingDevices = [];
  instructors = [];

  constructor(private peopleService: PeopleService,
              private firearmsService: FirearmsService) { }

  ngOnInit() {
    this.user = this.peopleService.selectedPerson;
    this.firearms = this.firearmsService.firearms;

    this.sightingDevices.push(...this.firearmsService.lookupValues.filter(
      value => value.lookupType === 'sightingDevices'));

    // this.instructors.push(...this.peopleService.dbPeople.filter(
    //   value => value.instructor === true));
    this.instructors.push(this.peopleService.selectedPerson);
  }

  onSubmit(form: NgForm) {

  }

  onPhotoGrabbed(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageUrl = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}

import { NgForm } from '@angular/forms';
import { PeopleService } from './../../people/people.service';
import { User } from '@microsoft/microsoft-graph-types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-qualification',
  templateUrl: './new-qualification.component.html',
  styleUrls: ['./new-qualification.component.css']
})
export class NewQualificationComponent implements OnInit {
  user: User;
  imageUrl: string;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.user = this.peopleService.selectedPerson;

  }

  onSubmit(form: NgForm) {

  }

  onPhotoGrabbed(event: any) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}

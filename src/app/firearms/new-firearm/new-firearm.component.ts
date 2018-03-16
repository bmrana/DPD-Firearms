import { ServiceConnectionService } from './../../shared/service-connection.service';
import { HomeService } from './../../home/home.service';
import { HeaderService } from './../../header/header.service';
import { Firearm } from './../firearm.model';
import { NewSelectionComponent } from './new-selection/new-selection.component';
import { LookupValuesResolverService } from './../lookup-values-resolver.service';
import { Observable } from 'rxjs/Observable';
import { FormControl, NgForm } from '@angular/forms';
import { OrderPipePipe } from './../../shared/pipes/order-pipe.pipe';
import { FirearmsService } from './../firearms.service';
import { Router } from '@angular/router';
import { PeopleService } from './../../people/people.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '@microsoft/microsoft-graph-types';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-firearm',
  templateUrl: './new-firearm.component.html',
  styleUrls: ['./new-firearm.component.css']
})
export class NewFirearmComponent implements OnInit {
  user: User;
  selectedManufacturer = null;
  selectedModel = null;
  selectedCaliber = null;

  calibers = [];
  types = [];
  manufacturers = [];
  models = [];
  newField: string;

  constructor(private peopleService: PeopleService,
    private headerService: HeaderService,
    private router: Router,
    private firearmsService: FirearmsService,
    private http: ServiceConnectionService,
    private orderPipe: OrderPipePipe,
    public dialog: MatDialog,
    private homeService: HomeService) { }

  ngOnInit() {
    this.user = this.peopleService.selectedPerson;

    this.calibers.push(...this.firearmsService.lookupValues.filter(value => value.lookupType === 'calibers'));

    this.types.push(...this.firearmsService.lookupValues.filter(value => value.lookupType === 'types'));

    this.manufacturers.push(...this.firearmsService.lookupValues.filter(value => value.lookupType === 'manufacturers'));
    this.manufacturers = this.orderPipe.transform(this.manufacturers, 'lookupValue', false);

    this.models.push(...this.firearmsService.lookupValues.filter(value => value.lookupType === 'models'));
  }

  onSelectionChange(event) {
    if (event.value === -99) {
      this.openDialog(event.source.id);
    }
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newFirearm: Firearm = new Firearm(-99, value.firearmType, value.serial, value.caliber.lookupValue, value.caliber.lookupID,
      this.peopleService.selectedPerson.mail, value.primary,
      value.manufacturer.lookupValue, value.manufacturer.lookupID, value.model.lookupValue, value.model.lookupID);

    this.http.addFirearm(newFirearm)
      .subscribe(
        (result) => {
          this.homeService.snackMessage.next('Firearm Added');
          this.headerService.currentView.next('firearms');
        }
      );
  }

  openDialog(title: string): void {
    const dialogRef = this.dialog.open(NewSelectionComponent, {
      width: '250px',
      data: { title: title, field: this.newField }
    });

    dialogRef.afterClosed().subscribe(result => {
      switch (result.title) {
        case 'Manufacturer':
          this.manufacturers.push(
            {
              lookupID: Math.max.apply(Math, this.manufacturers.map(o => o.lookupID)) + 1,
              lookupType: 'manufacturers',
              lookupValue: result.field,
              manufacturerValue: ''
            }
          );
          this.selectedManufacturer = this.manufacturers.find(
            m => m.lookupID === Math.max.apply(Math, this.manufacturers.map(o => o.lookupID)));
          console.log(this.manufacturers);
          console.log(this.selectedManufacturer);
          break;
        case 'Model':
          this.models.push(
            {
              lookupID: Math.max.apply(Math, this.models.map(o => o.lookupID)) + 1,
              lookupType: 'models',
              lookupValue: result.field,
              manufacturerValue: this.selectedManufacturer.lookupID
            }
          );
          this.selectedModel = this.models.find(
            m => m.lookupID === Math.max.apply(Math, this.models.map(o => o.lookupID )));
          break;
        case 'Caliber':
          this.calibers.push(
            {
              lookupID: Math.max.apply(Math, this.calibers.map(o => o.lookupID)) + 1,
              lookupType: 'calibers',
              lookupValue: result.field,
              manufacturerValue: ''
            }
          );
          this.selectedCaliber = this.calibers.find(
            c => c.lookupID === Math.max.apply(Math, this.calibers.map(o => o.lookupID)));
          break;
      }
    });
  }
}

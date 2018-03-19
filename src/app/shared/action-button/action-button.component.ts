import { HeaderService } from './../../header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {
  @Input() index: number;

  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit() {
  }

  onClick() {
    if (this.index === 1) {
      // this.router.navigate(['/app/firearm']);
      this.headerService.currentView.next('firearm');
    }

    if (this.index === 0) {
      // this.router.navigate(['/app/qualification']);
      this.headerService.currentView.next('qualification');
    }
  }
}

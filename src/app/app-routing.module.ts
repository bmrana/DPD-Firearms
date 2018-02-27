import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorSelectorComponent } from './color-selector/color-selector.component';

const routes: Routes = [
  { path: '', component: ColorSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

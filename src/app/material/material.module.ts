import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule,
         MatSelectModule, 
         MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatAutocompleteModule,
         MatIconModule,
         MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }

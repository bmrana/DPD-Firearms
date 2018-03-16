import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule,
         MatSelectModule,
         MatButtonModule,
         MatToolbarModule,
         MatInputModule,
         MatAutocompleteModule,
         MatIconModule,
         MatListModule,
         MatTabsModule,
         MatDividerModule,
         MatCardModule,
         MatButtonToggleModule,
         MatExpansionModule,
         MatCheckboxModule,
         MatDialogModule,
         MatSnackBarModule,
         MatDatepickerModule} from '@angular/material';

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
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  declarations: []
})
export class MaterialModule { }

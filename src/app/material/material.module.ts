import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule,
         MatSelectModule, 
         MatButtonModule,
         MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }

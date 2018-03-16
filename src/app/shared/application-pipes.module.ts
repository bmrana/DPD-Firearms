import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPipePipe } from './pipes/order-pipe.pipe';
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { FilterArrayPipe } from './pipes/filter-array.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    OrderPipePipe,
    PrettyDatePipe,
    FilterArrayPipe
  ],
  declarations: [
    OrderPipePipe,
    PrettyDatePipe,
    FilterArrayPipe,
  ],
  providers: [
    OrderPipePipe,
    PrettyDatePipe,
    FilterArrayPipe
  ]
})
export class ApplicationPipesModule { }

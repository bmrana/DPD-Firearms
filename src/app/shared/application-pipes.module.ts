import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPipePipe } from './order-pipe.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    OrderPipePipe
  ],
  declarations: [
    OrderPipePipe
  ],
  providers: [
    OrderPipePipe
  ]
})
export class ApplicationPipesModule { }

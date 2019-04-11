import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesPipe } from '../../pipes/times.pipe';

@NgModule({
  declarations: [
    TimesPipe
  ],
  exports: [
    TimesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

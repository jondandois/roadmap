import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { PipesModule } from '../shared/modules/pipes/pipes.module';

@NgModule({
  declarations: [RoadmapComponent],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class RoadmapModule { }

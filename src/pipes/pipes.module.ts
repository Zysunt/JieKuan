import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time/relative-time';
import { PipPipe } from './pip/pip';
@NgModule({
	declarations: [RelativeTimePipe,
    PipPipe,
    PipPipe],
	imports: [],
	exports: [RelativeTimePipe,
    PipPipe,
    PipPipe]
})
export class PipesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { WeatherContainerComponent } from './weather.container';
import { WeatherService } from './weather.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects),
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainerComponent],
  providers: [WeatherService]
})
export class WeatherModule { }

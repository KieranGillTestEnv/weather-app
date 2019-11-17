import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as weatherActions from '../actions/weather.actions';

import { WeatherService } from '../../weather.service';

@Injectable()
export class WeatherEffects {

    @Effect()
    loadCity$: Observable<Action> = this.actions$.pipe(
        ofType(weatherActions.GET_CITY),
        switchMap((action: any) => {
        return this.weatherService
            .searchWeatherForCity(action.payload)
            .pipe(
                map(city => new weatherActions.GetCitySuccess(city)),
                catchError(error => of(new weatherActions.GetCityFail(error)))
            );
        })
    );

    constructor(
        private actions$: Actions,
        private weatherService: WeatherService
    ) {}
}

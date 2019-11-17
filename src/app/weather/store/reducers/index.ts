import { ActionReducerMap } from '@ngrx/store';

import * as fromWeather from './weather.reducer';

export interface State {
    city: fromWeather.WeatherState;
}

export const reducers: ActionReducerMap<State>  = {
    city: fromWeather.reducer
};

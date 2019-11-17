import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromWeather from '../reducers/weather.reducer';

import { State } from '../index';

export const getWeatherState = createFeatureSelector<State>('weather');
export const getCityState = createSelector(getWeatherState, (state: State) => state.city);
export const getCity = createSelector(getCityState, fromWeather.getCity);
export const getCityFailed = createSelector(getCityState, fromWeather.getCityFailed);

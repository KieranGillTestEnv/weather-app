import { Action } from '@ngrx/store';

import { Weather } from '../../../model/weather';

export const GET_CITY = '[Weather] Get City';
export const GET_CITY_FAIL = '[Weather] Get City Fail';
export const GET_CITY_SUCCESS = '[Weather] Get City Success';

export class GetCity implements Action {
  readonly type = GET_CITY;
  constructor(public payload: string) {}
}

export class GetCityFail implements Action {
  readonly type = GET_CITY_FAIL;
  constructor(public payload: any) {}
}

export class GetCitySuccess implements Action {
  readonly type = GET_CITY_SUCCESS;
  constructor(public payload: Weather) {}
}

export type WeatherAction = GetCity | GetCityFail | GetCitySuccess;

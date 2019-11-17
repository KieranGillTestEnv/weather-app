import * as moment from 'moment';
import * as _ from 'lodash';

import * as fromWeatherActions from '../actions/weather.actions';

export interface WeatherSummary {
    name: string;
    am6: number;
    pm12: number;
    pm6: number;
    am12: number;
}

export interface WeatherState {
    weather:  WeatherSummary[];
    failed: boolean;
}

export const initialState = {
    weather: [],
    failed: false,
};

export function reducer(state = initialState, action: fromWeatherActions.WeatherAction): WeatherState {
    switch (action.type) {
        case fromWeatherActions.GET_CITY: {
            return {
                ...state,
                failed: false,
            };
        }

        case fromWeatherActions.GET_CITY_FAIL: {
            return {
                ...state,
                failed: true,
            };
        }

        case fromWeatherActions.GET_CITY_SUCCESS: {
            const data = action.payload;
            const times = ['06', '12', '18', '00'];

            if (data.list) {
                const cityData = { name: data.city.name };

                data.list.forEach((city) => {
                    /**
                     * Only add temp every 6 hours to get 24 hour readings
                     */
                    if (times.includes(moment(city.dt_txt).format('HH'))) {
                        const key = moment(city.dt_txt).format('ah');
                        cityData[key] = city.main.temp;
                    }
                });

                /**
                 * Use uniqBy to stop duplicate entries
                 */
                return {
                    ...state,
                    failed: false,
                    weather: _.uniqBy([...state.weather, cityData], (weather) => weather.name),
                };
            } else {
                return state;
            }
        }
    }

    return state;
}

export const getCity = (state: WeatherState) => state.weather;
export const getCityFailed = (state: WeatherState) => state.failed;

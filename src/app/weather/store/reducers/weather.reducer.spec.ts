import * as fromWeatherReducer from './weather.reducer';
import * as fromActions from '../actions';

import { Weather } from '../../../model/weather';

export const mockWeatherReturn = { name: 'London', am12: 7.99, am6: 7.99, pm12: 7.99, pm6: 7.99 };
export const mockWeather: Weather = {
    cod: '200',
    message: 0,
    cnt: 8,
    list: [{
        dt: 1574002800,
        main: {
            temp: 7.99,
            temp_min: 7.74,
            temp_max: 7.99,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1007,
            humidity: 68,
            temp_kf: 0.25
        },
        weather: [{
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
        }],
        clouds: {
            all: 100
        },
        wind: {
            speed: 1.34,
            deg: 20
        },
        sys: {
            pod: 'd'
        },
        dt_txt: '2019-11-17 00:00:00'
    },
    {
        dt: 1574002800,
        main: {
            temp: 7.99,
            temp_min: 7.74,
            temp_max: 7.99,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1007,
            humidity: 68,
            temp_kf: 0.25
        },
        weather: [{
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
        }],
        clouds: {
            all: 100
        },
        wind: {
            speed: 1.34,
            deg: 20
        },
        sys: {
            pod: 'd'
        },
        dt_txt: '2019-11-17 06:00:00'
    },
    {
        dt: 1574002800,
        main: {
            temp: 7.99,
            temp_min: 7.74,
            temp_max: 7.99,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1007,
            humidity: 68,
            temp_kf: 0.25
        },
        weather: [{
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
        }],
        clouds: {
            all: 100
        },
        wind: {
            speed: 1.34,
            deg: 20
        },
        sys: {
            pod: 'd'
        },
        dt_txt: '2019-11-17 12:00:00'
    },
    {
        dt: 1574002800,
        main: {
            temp: 7.99,
            temp_min: 7.74,
            temp_max: 7.99,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1007,
            humidity: 68,
            temp_kf: 0.25
        },
        weather: [{
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d'
        }],
        clouds: {
            all: 100
        },
        wind: {
            speed: 1.34,
            deg: 20
        },
        sys: {
            pod: 'd'
        },
        dt_txt: '2019-11-17 18:00:00'
    }],
    city: {
        id: 2643743,
        name: 'London',
        coord: {
            lat: 51.5073,
            lon: -0.1277
        },
        country: 'GB',
        population: 1000000,
    }
};

describe('Weather Reducer', () => {
    describe('get city action', () => {
        it('should set failed to false', () => {
            const { initialState } = fromWeatherReducer;
            const action = new fromActions.GetCity('London');
            const state = fromWeatherReducer.reducer(initialState, action);

            expect(state.weather).toEqual([]);
            expect(state.failed).toEqual(false);
        });
    });

    describe('get city fail action', () => {
        it('should set failed to true', () => {
            const { initialState } = fromWeatherReducer;
            const payload = { message: 'Error' };
            const action = new fromActions.GetCityFail(payload);
            const state = fromWeatherReducer.reducer(initialState, action);

            expect(state.weather).toEqual([]);
            expect(state.failed).toEqual(true);
        });
    });

    describe('get city success action', () => {
        it('should set failed to false and add city to store', () => {
            const { initialState } = fromWeatherReducer;
            const action = new fromActions.GetCitySuccess(mockWeather);
            const state = fromWeatherReducer.reducer(initialState, action);

            expect(state.weather[0]).toEqual(mockWeatherReturn);
            expect(state.failed).toEqual(false);
        });
    });
});

import * as fromWeather from './weather.actions';
import { Weather } from '../../../model/weather';

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
        dt_txt: '2019-11-17 15:00:00'
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

describe('Weather Actions', () => {
    it('should create get city action', () => {
        const payload = 'london';
        const action = new fromWeather.GetCity(payload);

        expect({ ...action }).toEqual({type: fromWeather.GET_CITY, payload: payload});
    });

    it('should create get city success action', () => {
        const action = new fromWeather.GetCitySuccess(mockWeather);

        expect({ ...action }).toEqual({type: fromWeather.GET_CITY_SUCCESS, payload: mockWeather});
    });

    it('should create get city fail action', () => {
        const payload = { message: 'Error' };
        const action = new fromWeather.GetCityFail(payload);

        expect({ ...action }).toEqual({type: fromWeather.GET_CITY_FAIL, payload});
    });
});

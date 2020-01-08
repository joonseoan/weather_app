import { FETCH_WEATHER, FETCH_ERROR } from './type';
import stream from '../api/stream';

export const getWeather = cityName => async dispatch => {
    const cityUrl = `?q=${ cityName },ca&appid=${ process.env.REACT_APP_WEATHER_KEY }`;
    try {
        
        const response = await stream.get(cityUrl);
        
        // when the city name is available
        dispatch({ 
            type: FETCH_WEATHER,
            payload: response.data
        });

    } catch(error) {
        
        // When the city is not available
        if(error.response.data.cod === '404') {
            dispatch({
                type: FETCH_ERROR,
                payload: error.response.data.message
            })
        } else {
            throw new Error('Sorry, unexpected error occurrs.');
        }
    }
} 
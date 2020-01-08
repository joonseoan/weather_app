import { FETCH_WEATHER, FETCH_ERROR } from '../../actions/type';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {

    switch(action.type) {
        case FETCH_WEATHER:
            // when the weather data is available
            return { ...action.payload };   
        case FETCH_ERROR:
        
            // error message from the openwhether map when the city is not available;
            return { errorMessage: action.payload };
        default:
            return state;
    }
}
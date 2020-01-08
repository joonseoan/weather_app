import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../../actions/';

import './_WeatherForm.scss';

const WeatherForm = props => {

    const [cityName, setCityName ] = useState('');
    
    const handleOnChange = e => {
        setCityName(e.target.value);
    }

    const handeSubmit = e => {
        e.preventDefault();
        props.getWeather(cityName);
        setCityName('');
    }

    return(
        <form 
            onSubmit= { handeSubmit }
            className="form"
        >
            <label
                className="form__label"
            >
                Enter City name:
            </label>
            <input
                className="form_input" 
                type="text"  
                value={ cityName }
                onChange={ handleOnChange }
            />
        </form>
    );
}

export default connect(null, { getWeather })(WeatherForm);
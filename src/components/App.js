import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ShowWeathers from './weathers/showWeathers/ShowWeathers';
import WeatherForm from './weathers/weatherForm/WeatherForm';
import { getWeather } from '../actions/';
import './_App.scss';

const App = props => {
    const { getWeather } = props;    
    useEffect(() => {
        getWeather('toronto');
    })
    
    return(

        <section className="container">
            <div className="weather-form">
                <WeatherForm />
            </div>
            <div className="show-weathers">
                <ShowWeathers />
            </div>
      
        </section>
    );    
}

export default connect(null, { getWeather })(App);

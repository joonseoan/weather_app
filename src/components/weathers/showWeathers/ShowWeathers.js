import React from 'react';
import { connect } from 'react-redux';

import './_ShowWeathers.scss';

const ShowWeathers = ({ weatherForcast }) => {
    
    if(!weatherForcast) {
        return <div />;
    }

    const { list } = weatherForcast;
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let disPlayElements = [];
    if(list && list.length > 0) {
        disPlayElements = list.map(weather => ({ 
            temp: Math.round(weather.main.temp - 273.15),
            day: weather.dt_txt,
            icon: weather.weather[0].icon 
        }));
    }

    const renderWeather = () => {
        if(weatherForcast.errorMessage) {
            return 'Sorry, ' + weatherForcast.errorMessage;
        }

        return disPlayElements.map((weather, index) => {
            const date = new Date(weather.day);
            return(
                <li
                    key={ index } 
                    className="weather__display"
                >
                    <h4 
                        className="weather__display__day"
                    >
                        { days[date.getDay()] }
                    </h4>
                    <div className="weather__display__image">
                        <img 
                            src={`http://openweathermap.org/img/w/${ weather.icon }.png`} 
                            alt={`${weather.icon}`} 
                        />
                    </div>
                    <div
                        className="weather__display__temp"
                    >
                        { weather.temp.toString() } &#8451;
                    </div>
                </li>
            );
        })
    }
    
    return(
        <div className="display">
            <h1 className="city">{ weatherForcast.city && weatherForcast.city.name }</h1>
            <ul className="weather">
                { renderWeather() }
            </ul>
        </div>
    );
}

const mapStateToProps = ({ weatherForcast }) => ({ weatherForcast });

export default connect(mapStateToProps, null)(ShowWeathers);

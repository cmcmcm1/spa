import React, { Component } from 'react';

export class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }
    componentDidMount() {
        this.getWeatherData();
    }

    static renderWeather(data) {
        return (<div id="weather">
            <div id="description">{data.weather[0].description}</div>
            <h1 id="temp">{Math.round(parseFloat(data.main.temp) - 273.15)} C</h1>
            <div id="location">{data.name}</div>
        </div>);
    }
    async getWeatherData() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=44e7e1729958bd5556aab9889abc6bcf');
        const data = await response.json();
        this.setState({ forecasts: data, loading:false });
    }

    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : Weather.renderWeather(this.state.forecasts);

        return (
            <div>
                {contents}
            </div>
        );
    }
}

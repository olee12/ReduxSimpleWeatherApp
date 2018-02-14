import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
class WeatherList extends Component {

    renderWeather(cityData) {
        if (!cityData.city) return;
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;



        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humiditys = cityData.list.map(weather => weather.main.humidity);
        console.log(temps);
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td> <Chart data={temps} color="orange" units="k" /> </td>
                <td> <Chart data={pressures} color="green" units="hPa" /> </td>
                <td> <Chart data={humiditys} color="black" units="%" /> </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(k)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
};

function mapStateToProps({ weather }) { // weather = state.weather
    return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
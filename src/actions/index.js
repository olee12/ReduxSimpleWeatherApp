import axios from 'axios';
const API_KEY = '5dfe085dac349bc56172144157a8db70';
const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${root_url}&q=${city},bd`;

    const request = axios.get(url);

    console.log('request : ',request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
import {getKeyValue} from "./storage.service.js";
import axios from "axios";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return'☀️';
    case '02':
      return'🌤️';
    case '03':
      return'⛅';
    case '04':
      return'☁️';
    case '09':
      return'🌧️';
    case '10':
      return'⛈️';
    case '11':
      return'🌩️';
    case '13':
      return'🌨️';
    case '50':
      return'🌫️';
  }
}

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue('token');
  if (!token) {
    throw new Error('API key is not set - set it using the -t [API_KEY] command;');
  }

  const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
      q: city,
      appid: token,
      units: 'metric',
      lang: 'ru',
    }
  })

  return data;
}

export {getWeather, getIcon};
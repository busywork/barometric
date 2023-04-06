import React from 'react';

import {
  Star,
  Fork,
  ClearDay,
  ClearNight,
  Cloudy,
  Drizzle,
  Fog,
  Hail,
  PartlyCloudyDay,
  PartlyCloudyNight,
  PartlyCloudyDayRain,
  PartlyCloudyNightRain,
  Rain,
  Sleet,
  Snow,
  Thunderstorm,
  Tornado,
  Wind,
  GitHub,
} from './';

export default ({ name }) => {
  switch (name) {
    case 'star':
      return <Star />;
    case 'fork':
      return <Fork />;
    case '01d':
      return <ClearDay />;
    case '01n':
      return <ClearNight />;
    case 'cloudy':
      return <Cloudy />;
    case '09d':
      return <Drizzle />;
    case '50d':
      return <Fog />;
    case '50n':
      return <Fog />;
    case 'hail':
      return <Hail />;
    case '02d':
      return <PartlyCloudyDay />;
    case '03d':
      return <PartlyCloudyDay />;
    case '04d':
      return <PartlyCloudyDay />;
    case '02n':
      return <PartlyCloudyNight />;
    case '03n':
      return <PartlyCloudyNight />;
    case '04n':
      return <PartlyCloudyNight />;
    case 'partly-cloudy-day-rain':
      return <PartlyCloudyDayRain />;
    case 'partly-cloudy-night-rain':
      return <PartlyCloudyNightRain />;
    case '10d':
      return <Rain />;
    case 'sleet':
      return <Sleet />;
    case '13d':
      return <Snow />;
    case '11d':
      return <Thunderstorm />;
    case 'tornado':
      return <Tornado />;
    case 'wind':
      return <Wind />;
    case 'github':
      return <GitHub />;
    default:
      return null;
  }
};

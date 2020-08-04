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
    case 'clear-day':
      return <ClearDay />;
    case 'clear-night':
      return <ClearNight />;
    case 'cloudy':
      return <Cloudy />;
    case 'drizzle':
      return <Drizzle />;
    case 'fog':
      return <Fog />;
    case 'hail':
      return <Hail />;
    case 'partly-cloudy-day':
      return <PartlyCloudyDay />;
    case 'partly-cloudy-night':
      return <PartlyCloudyNight />;
    case 'partly-cloudy-day-rain':
      return <PartlyCloudyDayRain />;
    case 'partly-cloudy-night-rain':
      return <PartlyCloudyNightRain />;
    case 'rain':
      return <Rain />;
    case 'sleet':
      return <Sleet />;
    case 'snow':
      return <Snow />;
    case 'thunderstorm':
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

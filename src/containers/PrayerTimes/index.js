import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';
import {
  dayTimings,
  getCitiesByCulture,
  getDayByCulture,
  getElementByCulture,
  getValueByCulture,
  hijriMonths,
  languages,
  timeZone,
} from '../../helpers/strings';
import fajrIcone from '../../ressources/sunrise-sunset/svg/016-cloudy-night-3.svg';
import sunriseIcone from '../../ressources/sunrise-sunset/svg/002-sunrise.svg';
import dhuhrIcone from '../../ressources/sunrise-sunset/svg/001-sun.svg';
import asrIcone from '../../ressources/sunrise-sunset/svg/015-cloudy-day-1.svg';
import maghribIcone from '../../ressources/sunrise-sunset/svg/003-sunset.svg';
import ishaIcone from '../../ressources/sunrise-sunset/svg/009-cloudy-night.svg';
import { isNilOrEmpty, splitTime, splitTimeZone } from '../../helpers/helper';

class PrayerTimeInformations extends Component {
  static defaultProps = {
    date: null,
    prayerTimeInformations: null,
  };

  getCity = selectedCity => {
    const { cities, culture } = this.props;
    if (isNilOrEmpty(selectedCity)) return null;

    return getCitiesByCulture(cities, culture).filter(
      city => city.value === selectedCity.value
    )[0];
  };

  renderTimeBloc = (title, time, src, alt) => {
    return (
      <div className="Time-Bloc">
        <img className="img" src={src} alt={alt} />
        <h4 className="day-time">{`${splitTime(time)}${title}`}</h4>
      </div>
    );
  };

  renderTimeZoneBloc = () => {
    const { Fajr } = this.props.prayerTimeInformations;
    const { culture } = this.props;

    return `${getValueByCulture(timeZone, culture)} ${splitTimeZone(Fajr)}`;
  };

  renderTimes = () => {
    const {
      Asr,
      Dhuhr,
      Fajr,
      Isha,
      Maghrib,
      Sunrise,
    } = this.props.prayerTimeInformations;
    const { culture } = this.props;

    return (
      <div className="Time-Container">
        {this.renderTimeBloc(
          ` : ${getElementByCulture(dayTimings, 0, culture)}`,
          Fajr,
          fajrIcone,
          'Fajr'
        )}
        {this.renderTimeBloc(
          ` : ${getElementByCulture(dayTimings, 1, culture)}`,
          Sunrise,
          sunriseIcone,
          'Sunrise'
        )}
        {this.renderTimeBloc(
          ` : ${getElementByCulture(dayTimings, 2, culture)}`,
          Dhuhr,
          dhuhrIcone,
          'Dhuhr'
        )}
        {this.renderTimeBloc(
          ` : ${getElementByCulture(dayTimings, 3, culture)}`,
          Asr,
          asrIcone,
          'Asr'
        )}
        {this.renderTimeBloc(
          ` : ${getElementByCulture(dayTimings, 4, culture)}`,
          Maghrib,
          maghribIcone,
          'Maghrib'
        )}
        {this.renderTimeBloc(
          ` : ${getElementByCulture(dayTimings, 5, culture)}`,
          Isha,
          ishaIcone,
          'Isha'
        )}
      </div>
    );
  };

  renderDayTitle = () => {
    const { culture, date } = this.props;
    const { hijri } = date;
    const day = getDayByCulture(hijri.weekday.ar, culture);
    const month = getElementByCulture(
      hijriMonths,
      hijri.month.number - 1,
      culture
    );

    if (culture === languages.ar)
      return `${date.hijri.year} ${day} ${date.hijri.day} ${month}`;

    return `${day} ${date.hijri.day} ${month} ${date.hijri.year} `;
  };

  render() {
    const { city } = this.props;
    if (!city) return null;

    return (
      <div className="Container">
        <hr />
        <h2>{this.getCity(city).label}</h2>
        <h2>{this.renderTimeZoneBloc()}</h2>
        <h4>{this.renderDayTitle()}</h4>
        {this.renderTimes()}
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    city: state.activeCity,
    country: state.activeCountry,
    culture: state.activeCulture,
  };
};

export default connect(mapStateToProps)(PrayerTimeInformations);

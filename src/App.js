import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './App.css';
import './ressources/Fonts/font.css';
import 'react-datepicker/dist/react-datepicker.css';
import { isNilOrEmpty } from './helpers/helper';
import { ErrorType, LoadingType } from './components/RequestStatus';
import { getPrayerTimeByCity, getPrayerTime } from './API/actions';
import Countries from './containers/Countries';
import Cities from './containers/Cities';
import Culture from './containers/Culture';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import MonthPrayerTimes from './containers/MonthPrayerTimes';
import PrayerTimeInformations from './containers/PrayerTimes';
import {
  copyright,
  errorMessage,
  getValueByCulture,
  prayerTime,
  languages,
} from './helpers/strings';
import Clock from './components/Clock';

class App extends Component {
  static defaultProps = {
    culture: languages.ar,
  };

  handleClick = city => {
    const { country, getPrayerTime } = this.props;
    const date = new Date();

    if (isNilOrEmpty(city)) return null;
    getPrayerTime(
      city.key,
      country.key,
      2,
      date.getMonth() + 1,
      date.getFullYear()
    );
  };

  renderDayTimings = (timings, date) => {
    if (isNilOrEmpty(timings) || isNilOrEmpty(date)) return null;

    return (
      <div className="App-block" key={date.hijri.day}>
        <PrayerTimeInformations date={date} prayerTimeInformations={timings} />
      </div>
    );
  };

  renderPrayerTimeInformations = () => {
    const { culture } = this.props;
    const { prayerTimeInformations } = this.props.prayerTimeInformations;

    if (prayerTimeInformations.fetchingStatus === ErrorType)
      return (
        <ErrorMessage message={getValueByCulture(errorMessage, culture)} />
      );
    if (prayerTimeInformations.fetchingStatus === LoadingType) return null;

    if (isNilOrEmpty(prayerTimeInformations.informations)) return null;

    const today = new Date();
    const { date, timings } = prayerTimeInformations.informations.data.filter(
      day => parseInt(day.date.gregorian.day, 10) === today.getUTCDate()
    )[0];

    if (isNilOrEmpty(timings)) return null;

    return [
      this.renderDayTimings(timings, date),
      <MonthPrayerTimes days={prayerTimeInformations.informations.data} />,
    ];
  };

  renderHeader = () => {
    const { culture } = this.props;

    return (
      <header className="App-header">
        <Culture />
        <h1>{getValueByCulture(prayerTime, culture)}</h1>
      </header>
    );
  };

  renderBody = () => {
    const { prayerTimeInformations } = this.props.prayerTimeInformations;
    return (
      <div className="App-body">
        <div className="App-Container">
          <div className="App-block">
            <Countries />
            <Cities OnChanged={this.handleClick} />
            <Clock />
            {prayerTimeInformations.fetchingStatus === LoadingType ? (
              <Loader />
            ) : null}
          </div>
          {this.renderPrayerTimeInformations()}
        </div>
      </div>
    );
  };

  renderFooter = () => {
    const { culture } = this.props;

    return (
      <footer>
        <div className="copyright">{getValueByCulture(copyright, culture)}</div>
      </footer>
    );
  };

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    prayerTimeInformations: state.prayerTimeInformations,
    city: state.activeCity,
    country: state.activeCountry,
    culture: state.activeCulture,
  };
};

const mapDispatchToProps = dispatch => ({
  getPrayerTime: bindActionCreators(getPrayerTime, dispatch),
  getPrayerTimeByCity: bindActionCreators(getPrayerTimeByCity, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

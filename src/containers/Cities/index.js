import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown';
import React, { Component } from 'react';

import 'react-dropdown/style.css';
import './styles.css';
import '../../ressources/Fonts/font.css';
import { isNilOrEmpty } from '../../helpers/helper';
import { func } from 'prop-types';
import {
  citiesPlaceholder,
  getCitiesByCulture,
  getValueByCulture,
} from '../../helpers/strings';
import { selectCity } from '../../actions';

class Cities extends Component {
  static propTypes = {
    OnChanged: func,
  };

  static defaultProps = {
    OnChanged: () => undefined,
  };

  OnCityChange = city => {
    const selectedCity = this.getCity(city);

    this.props.selectCity(selectedCity);
    this.props.OnChanged(selectedCity);
  };

  getCity = selectedCity => {
    const { cities, culture } = this.props;
    if (isNilOrEmpty(selectedCity)) return null;

    return getCitiesByCulture(cities, culture).filter(
      city => city.value === selectedCity.value
    )[0];
  };

  renderCities() {
    const { cities, culture } = this.props;

    return getCitiesByCulture(cities, culture).filter(
      city => city.country_id === this.props.country.value
    );
  }

  render() {
    const { city, cities, country, culture } = this.props;
    if (!country) return null;
    if (!cities) return <h3>المرجو تحميل قاعدة البيانات</h3>;

    return (
      <Dropdown
        className="Cities"
        onChange={city => this.OnCityChange(city)}
        options={this.renderCities()}
        placeholder={getValueByCulture(citiesPlaceholder, culture)}
        value={this.getCity(city)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.activeCity,
    country: state.activeCountry,
    cities: state.cities,
    culture: state.activeCulture,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity: selectCity }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);

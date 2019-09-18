import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import './styles.css';
import '../../ressources/Fonts/font.css';
import { isNilOrEmpty } from '../../helpers/helper';
import {
  getValueByCulture,
  getElementByCulture,
  countries as defaultCountries,
  countriesPlaceholder,
} from '../../helpers/strings';
import { selectCountry } from '../../actions';

class Countries extends Component {
  getCountry = selectedCountry => {
    if (isNilOrEmpty(selectedCountry)) return null;

    return this.getCountriesByCulture().filter(
      country => country.value === selectedCountry.value
    )[0];
  };

  getCountriesByCulture = () => {
    const { countries, culture } = this.props;
    if (isNilOrEmpty(countries)) return null;

    return countries.map(country => {
      const label = getElementByCulture(
        defaultCountries,
        country.value - 1,
        culture
      );

      return { ...country, label };
    });
  };

  OnCountryChange = country => {
    const selectedCountry = this.getCountry(country);
    this.props.selectCountry(selectedCountry);
  };

  render() {
    const { country, culture } = this.props;

    return (
      <Dropdown
        className="Countries"
        onChange={this.OnCountryChange}
        options={this.getCountriesByCulture()}
        value={this.getCountry(country)}
        placeholder={getValueByCulture(countriesPlaceholder, culture)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    country: state.activeCountry,
    countries: state.countries,
    culture: state.activeCulture,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCountry: selectCountry }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);

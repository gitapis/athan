import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

import 'react-dropdown/style.css';
import './styles.css';
import '../../ressources/Fonts/font.css';
import { selectCulture } from '../../actions';

class Culture extends Component {
  OnCultureChange = culture => {
    // const selectedCulture = this.getCountry(culture);

    this.props.selectCulture(culture.value);
  };

  render() {
    return (
      <Dropdown
        onChange={this.OnCultureChange}
        options={this.props.cultures}
        value={this.props.culture}
        placeholder="اختر اللغة"
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    culture: state.activeCulture,
    cultures: state.cultures,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCulture: selectCulture }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Culture);

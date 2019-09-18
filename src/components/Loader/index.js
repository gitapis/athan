import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import './styles.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className="Loader-Spinner">
        <Loader type="Puff" color="#00BFFF" height="50" width="50" />
      </div>
    );
  }
}

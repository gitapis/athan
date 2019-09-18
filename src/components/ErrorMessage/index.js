import React, { Component } from 'react';

import './styles.css';
import '../../ressources/Fonts/font.css';

export default class ErrorMessage extends Component {
  static defaultProps = {
    message: '',
  };

  render() {
    const { message } = this.props;

    return (
      <div className="Error">
        <div>{message}</div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Clock as LiveClock } from 'react-clock';

import './styles.css';

export default class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <div className="Clock">
        <LiveClock value={this.state.date} />
      </div>
    );
  }
}

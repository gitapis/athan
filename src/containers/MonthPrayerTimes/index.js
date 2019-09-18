import './styles.css';
import { connect } from 'react-redux';
import { Table, Tbody, Thead, Tr, Td, Th } from 'react-super-responsive-table';
import React, { Component } from 'react';

import {
  calendar,
  day,
  dayTimings,
  getElementByCulture,
  getDayByCulture,
  getValueByCulture,
  gregorianMonths,
  hijriMonths,
  languages,
  timeZone,
} from '../../helpers/strings';
import { isNilOrEmpty, splitTime, splitTimeZone } from '../../helpers/helper';

class MonthPrayerTimes extends Component {
  static defaultProps = {
    culture: languages.ar,
    days: null,
  };

  render() {
    const { days, culture } = this.props;

    if (isNilOrEmpty(days)) return null;

    return (
      <Table>
        <Thead>
          <Tr className="differentRow">
            <Th>{getValueByCulture(day, culture)}</Th>
            <Th>{getValueByCulture(timeZone, culture)}</Th>
            <Th>{getElementByCulture(calendar, 0, culture)}</Th>
            <Th>{getElementByCulture(calendar, 1, culture)}</Th>
            <Th>{getElementByCulture(dayTimings, 0, culture)}</Th>
            <Th>{getElementByCulture(dayTimings, 1, culture)}</Th>
            <Th>{getElementByCulture(dayTimings, 2, culture)}</Th>
            <Th>{getElementByCulture(dayTimings, 3, culture)}</Th>
            <Th>{getElementByCulture(dayTimings, 4, culture)}</Th>
            <Th>{getElementByCulture(dayTimings, 5, culture)}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {days.map((day, key) => {
            const { timings, date } = day;
            const { gregorian, hijri } = date;

            const { Asr, Dhuhr, Fajr, Isha, Maghrib, Sunrise } = timings;

            const today = new Date();
            const isToday = parseInt(gregorian.day, 10) === today.getUTCDate();

            return (
              <Tr key={key} className={isToday ? 'currentDay' : ''}>
                <Td>{getDayByCulture(hijri.weekday.ar, culture)}</Td>
                <Td>{splitTimeZone(Fajr)}</Td>
                <Td>
                  {getElementByCulture(
                    hijriMonths,
                    hijri.month.number - 1,
                    culture
                  )}{' '}
                  {hijri.day}
                </Td>
                <Td>
                  {getElementByCulture(
                    gregorianMonths,
                    gregorian.month.number - 1,
                    culture
                  )}{' '}
                  {gregorian.day}
                </Td>
                <Td>{splitTime(Fajr)}</Td>
                <Td>{splitTime(Sunrise)}</Td>
                <Td>{splitTime(Dhuhr)}</Td>
                <Td>{splitTime(Asr)}</Td>
                <Td>{splitTime(Maghrib)}</Td>
                <Td>{splitTime(Isha)}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    culture: state.activeCulture,
  };
}

export default connect(mapStateToProps)(MonthPrayerTimes);

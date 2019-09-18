import httpClient from '../helpers/httpClient';

const Timeout = 30000;

/**
 * BFF Client constructor.
 *
 * @example
 * const client = bffClient('http://api.aladhan.com')
 * @param {String} baseUrl Usually the bff base domain
 * @param headers {Object} http headers to append to each request
 * @returns {Object} Ready to use client
 */

export default (baseUrl, headers = {}) => {
  const client = httpClient({
    baseUrl,
    withCredentials: false,
    timeout: Timeout,
    headers: Object.assign({}, headers),
  });

  return {
    /**
     * Get Adan Time By Country and City
     *
     * @example
     * client.getPrayerTimeByCountryAndCity(
     *   'country',
     *   'city',
     *   'method',
     *   'month',
     *   'year',
     * ).then(...).catch(...)
     *
     * @param {String} [city]
     * @param {String} [country]
     * @param {Int} [method]
     * @param {Int} [month]
     * @param {Int} [year]
     * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
     *  complete, or rejected with and error.
     */
    getPrayerTimeByCountryAndCity: (city, country, method, month, year) => {
      const route = `/v1/calendarByCity?city=${city}&country=${country}&method=${method}&month=${month}&year=${year}`;

      return client.get(route);
    },

    /**
     * Get Adan Time By City
     *
     * @example
     * client.getPrayerTimeByCity(
     *   'city',
     * ).then(...).catch(...)
     *
     * @param {String} [city]
     * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
     *  complete, or rejected with and error.
     */
    getPrayerTimeByCity: city => {
      const route = `/v2/times/today.json?city=${city}`;

      return client.get(route);
    },
  };
};

/**
 * An opiniated isomorphic HTTP client supporting base methods on a specific domain
 * @module http-client
 */

import axios from 'axios';

/**
 * HTTP Client
 */
export class HttpClient {
  static requestInterceptors = [];
  static responseInterceptors = [];

  constructor(config) {
    this.client = axios.create({
      baseURL: config.baseUrl,
      headers: config.headers,
      timeout: config.timeout || 0,
      withCredentials: config.withCredentials || false,
    });

    HttpClient.requestInterceptors.forEach(interceptor =>
      this.addRequestInterceptor(interceptor)
    );

    HttpClient.responseInterceptors.forEach(interceptor => {
      this.addResponseInterceptor(interceptor);
    });
  }

  addRequestInterceptor = interceptor =>
    this.client.interceptors.request.use(
      interceptor.fulfilled,
      interceptor.rejected
    );

  addResponseInterceptor = interceptor =>
    this.client.interceptors.response.use(
      interceptor.fulfilled,
      interceptor.rejected
    );

  /**
   * Perform a GET request
   *
   * @example
   * // Will query ${baseUrl}/route
   * client.get('/route').then(...).catch(...)
   *
   * @example
   * const response = await client.get('/')
   *
   * @param {string} url Url of the request. Appended to baseUrl
   * @param {Object} [additionalHeaders={}] Additional headers to include in the request
   *
   * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
   *  complete, or rejected with and error.
   */
  get(url, additionalHeaders = {}) {
    return this.client.get(url, { headers: additionalHeaders });
  }

  /**
   * Perform a POST request
   *
   * @example
   * client.post('/', { value: 'key' }).then(...).catch(...)
   *
   * @example
   * const response = await client.post('/', { value: 'key' })
   *
   * @param {string} url Url of the request. Appended to baseUrl
   * @param {Object} [data={}] Request body
   * @param {Object} [additionalHeaders={}] Additional headers to include in the request
   *
   * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
   *  complete, or rejected with and error.
   */
  post(url, data = {}, additionalHeaders = {}) {
    return this.client.post(url, data, { headers: additionalHeaders });
  }

  /**
   * Perform a PUT request
   *
   * @example
   * client.put('/', { value: 'key' }).then(...).catch(...)
   *
   * @example
   * const response = await client.put('/', { value: 'key' })
   *
   * @param {string} url Url of the request. Appended to baseUrl
   * @param {Object} [data={}] Request body
   * @param {Object} [additionalHeaders={}] Additional headers to include in the request
   *
   * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
   *  complete, or rejected with and error.
   */
  put(url, data = {}, additionalHeaders = {}) {
    return this.client.put(url, data, { headers: additionalHeaders });
  }

  /**
   * Perform a PATCH request
   *
   * @example
   * client.patch('/', { value: 'key' }).then(...).catch(...)
   *
   * @example
   * const response = await client.patch('/', { value: 'key' })
   *
   * @param {string} url Url of the request. Appended to baseUrl
   * @param {Object} [data={}] Request body
   * @param {Object} [additionalHeaders={}] Additional headers to include in the request
   *
   * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
   *  complete, or rejected with and error.
   */
  patch(url, data = {}, additionalHeaders = {}) {
    return this.client.patch(url, data, { headers: additionalHeaders });
  }

  /**
   * Perform a DELETE request
   *
   * @example
   * client.delete('/').then(...).catch(...)
   *
   * @example
   * const response = await client.delete('/')
   *
   * @param {string} url Url of the request. Appended to baseUrl
   * @param {Object} [additionalHeaders={}] Additional headers to include in the request
   *
   * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
   *  complete, or rejected with and error.
   */
  delete(url, additionalHeaders = {}) {
    return this.client.delete(url, { headers: additionalHeaders });
  }

  /**
   * REQUEST with CONFIG
   * Exemple: retry request with config.
   *
   * @example
   * client.request(response.config).then(...).catch(...)
   *
   * @returns {Promise<Object>}  A promise that fulfills with the response when the request is
   *  complete, or rejected with and error.
   */
  request(config) {
    return this.client.request(config);
  }
}

/**
 * HTTP Client contructor.
 *
 * @example
 * const client = httpClient({ baseUrl: 'http://api.aladhan.com'})
 *
 * @param {Object} config Configuration for this client
 * @param {string} config.baseUrl Usually the domain
 * @param {Object} config.headers Headers to include in every requests from this client
 *
 * @returns {Object} Ready to use client
 */
export default function httpClient(config) {
  return new HttpClient(config);
}

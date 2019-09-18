import merge from 'ramda/src/merge';
import { isPathSatisfied, getPath } from './helper';

class Config {
  /**
   * Create a new Config object
   * @param defaultConfig
   */
  constructor(defaultConfig = {}) {
    this.listeners = { change: [] };
    this.config = defaultConfig;
  }

  /**
   * Register a callback to an event
   * @param event
   * @param cb
   */
  on(event = 'change', cb) {
    // eslint-disable-next-line fp/no-mutating-methods
    this.listeners[event].push(cb);
  }

  /**
   * Emit an event and call all its callbacks
   * @param event
   */
  emit(event) {
    this.listeners[event].forEach(cb => cb());
  }

  /**
   * Merge the existing configuration with new values
   * @param obj
   */
  update(obj) {
    this.config = merge(this.config, obj);
    this.emit('change');
  }

  /**
   * Return a configuration value, support dot notation
   * @param key
   * @returns {*}
   */
  get(key) {
    return getPath(key, this.config);
  }

  /**
   * Return whether a key exists, support dot notation
   * @param key
   * @returns {*}
   */
  has(key) {
    return isPathSatisfied(key, this.config);
  }

  /**
   * Returns the configuration
   * @returns {*|{}}
   */
  getConfig() {
    return this.config;
  }
}

export default new Config();

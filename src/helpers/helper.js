import {
  anyPass,
  assoc,
  complement,
  curry,
  flip,
  identity,
  ifElse,
  is,
  isEmpty,
  isNil,
  nth,
  path,
  pathSatisfies,
  split,
  zipObj,
} from 'ramda/src';

export const transformer = ifElse(is(String), split('.'), identity);

/**
 * Test if value is NilOrEmpty
 * @name isNilOrEmpty
 * @memberof RamdaHelper#
 * @see isPathSatisfied if you want to test nested object
 * @param {*} val
 * @returns {bool}
 * @example
 * isNilOrEmpty([]) //=> true
 * isNilOrEmpty({}) //=> true
 * isNilOrEmpty('') //=> true
 * isNilOrEmpty(null) //=> true
 * isNilOrEmpty(false) //=> false
 * isNilOrEmpty('test') //=> false
 * isNilOrEmpty(['test']) //=> false
 * isNilOrEmpty({ a: 1 }) //=> false
 */
export const isNilOrEmpty = anyPass([isEmpty, isNil]);

/**
 * Returns `true` for value that are defined and not empty, `false` otherwise
 * @name isSet
 * @memberof RamdaHelper
 * @see isNilOrEmpty
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isSet([]) //=> false
 * isSet({}) //=> false
 * isSet('') //=> false
 * isSet(null) //=> false
 * isSet(false) //=> true
 * isSet('test') //=> true
 * isSet(['test']) //=> true
 * isSet({ a: 1 }) //=> true
 */
export const isSet = complement(isNilOrEmpty);

const isPathDefined = pathSatisfies(isSet);

/**
 *  Returns `true` if the specified object property at given path isSet @see isSet
 *  returns `false` otherwise
 *  @name isPathSatisfied
 *  @memberof RamdaHelper#
 *  @param {string|string[]} propPath
 *  @param {*} obj
 *  @returns {Boolean}
 *  @example
 *
 *  isPathSatisfied('a.b.c', { a: { b: { c: 'c'} } }) //=> true
 *  isPathSatisfied(['a', 'b', 'c'], { a: { b: { c: 'c'} } }) //=> true
 *  isPathSatisfied('a.c.d', { a: { b: { c: 'c'} } }) //=> false
 *
 */
export const isPathSatisfied = curry((predicate, obj) =>
  isPathDefined(transformer(predicate), obj)
);

/**
 *  Retrieve the value at the given path
 *
 *  @name getPath
 *  @memberof RamdaHelper#
 *  @param {string|string[]} path
 *  @param {Object} obj
 *  @returns {*} The data at `path`
 *  @example
 *
 *  getPath('a.b.c', { a: { b : { c : 'value' } } })  //=> 'value'
 *  getPath(['a', 'b', 'c'], { a: { b : { c : 'value' } } })  //=> 'value'
 *  getPath(['a', 'c', 'd'], { a: { b : { c : 'value' } } })  //=> undefined
 */
export const getPath = curry((predicate, obj) =>
  path(transformer(predicate), obj)
);

const actionTypeIsRequired = () => {
  throw Error('You have to provide an actionType');
};

/**
 * Create an action for redux with at least a type and an empty payload.
 * @param {String} actionType indicates the type of action being performed, should typically be defined as string constants.
 * @param {...String} [payloadStructure] payload property names representing payload structure
 * @return {Function}
 *
 * @example
 * const TOGGLE_MENU = 'TOGGLE_MENU'
 * const toggleMenu = createAction(TOGGLE_MENU, 'isActive', 'isCollapsed')
 *
 * toggleMenu(true) => // { type: 'TOGGLE_MENU', payload: { isActive: true }}
 * toggleMenu(true, false) => // { type: 'TOGGLE_MENU', payload: { isActive: true, isCollapsed: false }}
 */
export const createAction = function reduxCreateAction(
  actionType = actionTypeIsRequired(),
  ...payloadStructure
) {
  const buildPayload = isEmpty(payloadStructure) ? nth(0) : flip(zipObj);

  return (...payloadData) => {
    const payload =
      isEmpty(payloadStructure) && isEmpty(payloadData)
        ? {}
        : { payload: buildPayload(payloadData, payloadStructure) };

    const action = assoc('type', actionType, payload);

    if (process.env.NODE_ENV === 'test') {
      // eslint-disable-next-line fp/no-mutating-methods
      Object.defineProperty(action, '_reduxAction', {
        enumerable: false,
        writable: true,
      });
      action._reduxAction = {
        name: actionType,
        args: payloadStructure,
      };
    }

    return action;
  };
};

export const splitTime = time => {
  const array = time.split(' ');
  return array[0];
};

export const splitTimeZone = time => {
  const array = time.split(' ');
  const timeZone = array[1];
  if (timeZone === '(+00)' || !timeZone) return 'GMT';

  return 'GMT ' + timeZone.replace('(', '').replace(')', '');
};

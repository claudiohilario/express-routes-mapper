const types = {
    ARRAY: '[object Array]',
    NUMBER: '[object Number]',
    BOOLEAN: '[object Boolean]',
    OBJECT: '[object Object]',
    STRING: '[object String]',
  
    UNDEFINED: '[object Undefined]',
    NULL: '[object Null]',
    SYMBOL: '[object Symbol]',
    FUNCTION: '[object Function]'
  }
  
  function getType(val) {
    return Object.prototype.toString.call(val);
  }
  
  function isString(val) {
    return getType(val) === types.STRING;
  }
  
  function isFunction(val) {
    return getType(val) === types.FUNCTION;
  }
  
  function isArray(val) {
    return getType(val) === types.ARRAY;
  }
  
  function isNumber(val) {
    return getType(val) === types.NUMBER;
  }
  
  function isBoolean(val) {
    return getType(val) === types.BOOLEAN;
  }
  
  function isObject(val) {
    return getType(val) === types.OBJECT;
  }
  
  function getTypeFormated(val) {
    const type = getType(val);
    return Object.keys(types).find(key => types[key] === type);
  }
  
  module.exports = {
    isArray,
    isNumber,
    isBoolean,
    isObject,
    getTypeFormated,
    types,
    getType,
    isFunction,
    isString,
  }
  
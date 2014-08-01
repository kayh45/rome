'use strict';

require('./polyfills/function.bind');
require('./polyfills/events');
require('./polyfills/isarray');

var core = require('./core');
var index = require('./index');
var use = require('./use');

core.use = use.bind(core);
core.find = index.find;
core.val = require('./validators');

module.exports = core;

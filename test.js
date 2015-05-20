'use strict';
var test = require('ava');
var kv = require('./');

test(function (t) {
    //t.assert(keyValue());
    console.log(kv.expand('a:b|c:d'));
});

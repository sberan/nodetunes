"use strict";
var getMac = require('getmac').getMac;
var AirTunesServer = require('../index');
var Speaker = require('speaker');

var speaker = new Speaker({
  channels: 2,
  bitDepth: 16,
  sampleRate: 44100
});

var getMac = require('getmac').getMac;
getMac(function(err, mac) {
    var server = new AirTunesServer({ serverName: 'NodeTunes Speaker 6', macAddress: mac, verbose: process.env.VERBOSE});

    server.on('clientConnected', function(stream) {
    	stream.pipe(speaker);
    });

    server.start();
});

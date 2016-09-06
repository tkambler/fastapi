#!/usr/bin/env node
'use strict';

const pkg = require('../package.json');
const program = require('commander');
const assert = require('assert');
const path = require('path');
const errors = require('./errors');
const app = require('./app');

function castInt(value) {
    let parsed = parseInt(value, 10);
    return parsed.toString().length !== value.length ? false : parsed;
}

program
    .version(pkg.version)
    .option('-c, --config <configuration file>', 'The path to a configuration file')
    .option('-p, --port <port>', 'The port on which Express is to listen', castInt)
    .parse(process.argv);

if (!process.argv.slice(2).length) {
    program.outputHelp();
    process.exit(0);
}

program.config = path.resolve(program.config);

let config;

try {
    config = require(program.config);
} catch(e) {
    throw new errors.MissingConfigurationError(undefined, program.config);
}

config.port = program.port || config.port;

if (!config.port || Number.isNaN(config.port)) {
    throw new errors.InvalidPortError(undefined, config.port);
}

app(config);

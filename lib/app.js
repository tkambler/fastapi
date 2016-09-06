'use strict';

module.exports = (config) => {

    config.log = typeof config.log === 'boolean' ? config.log : true;

    const express = require('express');
    const app = express();

    if (config.log) {
        app.use(require('morgan')('combined'));
    }

    for (let route in config.routes) {
        let appRoute = app.route(route);
        let methods = config.routes[route];
        for (let method in methods) {
            let routeFn = methods[method];
            appRoute[method](routeFn);
        }
    }

    app.listen(config.port, (err) => {
        if (err) throw err;
        console.log(`App is listening on port: ${config.port}`);
    });

};

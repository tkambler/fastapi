'use strict';

module.exports = (routes, port) => {

    const express = require('express');
    const app = express();

    app.use(require('morgan')('combined'));

    for (let route in routes) {
        let appRoute = app.route(route);
        let methods = routes[route];
        for (let method in methods) {
            let routeFn = methods[method];
            appRoute[method](routeFn);
        }
    }

    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`App is listening on port: ${port}`);
    });

};

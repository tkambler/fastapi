# fastapi

---

## Introduction

Fastapi is a simple command-line utility that allows you to create an [Express](https://expressjs.com/)-based server based off of a single configuration file. It's useful for quickly spinning up mock APIs, among other things.

## Getting Started

Install the `fastapi` command-line utility via `npm i -g fastapi`. Next, create a configuration file like the one we see here.

``` javascript
// config.js
module.exports = {
	// The port on which Express is to listen
    'port': 7050,
    // Whether or not to log incoming requests to the console (default: true)
    'log': true,
    'routes': {
        '/api/v1/ping': {
            'get': (req, res, next) => {
                return res.send('pong');
            }
        }
    }
};
```

Next, launch your server as shown below.

```
$ fastapi -c ./config.js
```

The port on which Express is to listen can be overridden by specifying it as an option on the command-line:

```
$ fastapi -c ./config.js -p 9050
```

## Related Resources

- [Express](https://expressjs.com/)
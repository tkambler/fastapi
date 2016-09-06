# fastapi

---

## Introduction

Fastapi is a simple command-line utility that allows you to create an [Express](https://expressjs.com/)-based server based off of a single configuration file. It's useful for quickly spinning up mock APIs, among other things.

## Getting Started

Install the `fastapi` command-line utility via `npm i -g fastapi`. Next, create a configuration file like the one we see here.

``` javascript
// config.js
module.exports = {
    '/api/v1/ping': {
        'get': (req, res, next) => {
            return res.send('pong');
        }
    }
};
```

Next, launch your server as shown below. Here we provide the `fastapi` utility with the path to our configuration file, along with a port on which it is to listen.

```
$ fastapi -c ./config.js -p 7050 
```

## Related Resources

- [Express](https://expressjs.com/)
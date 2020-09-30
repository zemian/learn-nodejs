There are many web server (framework) for JS, and we will explore some interesting ones here.


## Web Framework

* nodejs http - NodeJS builtin module that support http client and server processing.
    - Built-in to NodeJS
* connect - Connect is an extensible HTTP server framework for node using "plugins" known as middleware.
    - Smallest little framework you can get to handle wev app dev
* fastify - a light weight web framework compare to express
    - Smaller than express but still has "route" feature. Greate for API RESTful app.
* express - a full stack web framework ready for any app dev
    - Large dependency but has complete box of what you need for web app development.

## WebServer

* anywhere - a very simple and light web server utility that serves current directory content fast.
    - It can be run anywhere with `npx anywhere`
    - It uses `connect`, so it's super light and fast!
    
* markdown-preview - a webserver to preview a single markdown file
    - Nice fast and light server!
    - Project is no longer active? (archived)
    - It uses plain NodeJS http module only
    
* Not a JS, but still useful `python3 -m http.server`

## Middleware/Support Lib

* [server-index](https://www.npmjs.com/package/serve-index) - Serve directory listings
* [server-static](https://www.npmjs.com/package/serve-static) - Serve files from within a given root directory
* [connect-history-api-fallback](https://www.npmjs.com/package/connect-history-api-fallback) - For SPA redirect urls back to /index.html

There is a list of useful `connect` middleware [here](https://github.com/senchalabs/connect/wiki)

## Related Readings

* Interesting article here that list few ways to setup web servers: https://phaser.io/tutorials/getting-started-phaser3/part2

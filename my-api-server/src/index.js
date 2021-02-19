const express = require('express');
const messages = require('./messages.js');
const app = express();

app.use(express.static("public"));
app.use('/messages', messages);

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.get("/endpoints", (req, res) => {
    // console.log("app._router", app._router);
    // console.log("app.routes", app.routes);
    let ret = [];

    // Extract entpoints from main 'app'
    if  (app.routes) {
        for (let key in app.routes) {
            for (let route of app.routes[key]) {
                let path = route.path ? route.path : '/';
                let methods = [route.method.toUpperCase()];
                let key = path + methods.join(', ');
                ret.push({key: key, path: path, methods: methods});
            }
        }
    } else if (app._router && app._router.stack) {
        let routes = app._router.stack.filter(e => e.route)
        for (let routeLayer of routes) {
            //console.log("route", routeLayer);
            //console.log("route", routeLayer.route);
            let route = routeLayer.route;
            let path = route.path ? route.path : '/';
            let methods = route.stack.map(e => e.method.toUpperCase());
            let key = path + methods.join(', ');
            ret.push({key: key, path: path, methods: methods});
        }
    }

    // Extract endpoints from a router
    ret.push(...getEndpoints('/messages', messages));

    // Return all endpoints
    res.send(ret);
});

function getEndpoints(prefix, router) {
    let ret = [];
    // console.log("prefix", router);
    router.stack.forEach(routeLayer => {
        // console.log("route", routeLayer.route);
        if (routeLayer.route) {
            let route = routeLayer.route;
            let path = prefix + route.path;
            let methods = route.stack.map(e => e.method.toUpperCase());
            let key = path + methods.join(', ');
            ret.push({key: key, path: path, methods: methods});
        }
    });
    return ret;
}

let port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

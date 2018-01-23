const micro = require('micro');
const { Nuxt, Builder } = require('nuxt');
const config = require('./nuxt.config.js');

const nuxt = new Nuxt(config);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const server = micro((req, res) => nuxt.render(req, res));

const printURL = () => console.log(`Server listening on http://${host}:${port}`);

// Listen the server
server.listen(port, host);

// Enable live build & reloading on dev
if (nuxt.options.dev) {
    new Builder(nuxt)
        .build()
        .then(printURL);
} else {
    printURL();
}

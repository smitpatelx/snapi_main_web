const db = require('./database');
const consola = require('consola');

// Testing Database Connection
db
.authenticate()
.then(() => {
    consola.success({
        message: `Connection has been established successfully.`,
        badge: true
    });
})
.catch(err => {
    consola.error({
        message: `Unable to connect to the database: ${err}`,
        badge: true
    });
});
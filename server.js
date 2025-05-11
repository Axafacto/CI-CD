const Hapi = require('@hapi/hapi');
const routes = require('./routes'); //import module routes


const init = async () => {
    const server = Hapi.server({
        port : 5000,
        host : 'localhost',
    });

    server.route(routes); //menetapkan nilai konfigurasi routes

    await server.start()
    console.log(`Server sedang berjalan pada ${server.info.uri}`);
}

init();
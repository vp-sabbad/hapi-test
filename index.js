// jshint node:true

var Path = require('path');
var Hapi = require('hapi');
var Handlebars = require(Path.join(__dirname, 'bower_components/handlebars/handlebars.js'));
var Layouts = require(Path.join(__dirname, 'bower_components/handlebars-layouts/dist/handlebars-layouts.js'));

Layouts.register(Handlebars);

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.start(function() {
    console.log('Server running at:', server.info.uri);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply.view('index', { person: 'dude!' });
    }
});

server.views({
    engines: {
        html: Handlebars
    },
    path: Path.join(__dirname, 'templates'),
    partialsPath: Path.join(__dirname, 'layouts')
});

server.register(
    [
        {
            register: require('hapi-sequelized'),
            options: {
                database: ':memory:',
                user: '',
                pass: '',
                dialect: 'sqlite',
                port: 8889,
                models: 'models/**/*.js',
                sequelize: {
                    define: {
                        underscoredAll: true
                    }
                }
            }
        },
    ], function(err) {
        if (err) {
            console.error('failed to load plugin');
        } else {
            var db = server.plugins['hapi-sequelized'].db;
            db.sequelize.sync({force: true}).then(function() {
                console.log('models synced');
            });
        }
    }
);

module.exports = server;

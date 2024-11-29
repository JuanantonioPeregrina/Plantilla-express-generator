
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Configuración del middleware de sesión
const sessionMiddleware = session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Cambia a true si usas HTTPS
});

// Guardar el middleware de sesión para usarlo en `bin/www`
app.set('sessionMiddleware', sessionMiddleware);

// Inicializa historial de mensajes
app.locals.messages = [];

// Middlewares básicos
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sessionMiddleware);
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Configurar vistas con Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

module.exports = app;

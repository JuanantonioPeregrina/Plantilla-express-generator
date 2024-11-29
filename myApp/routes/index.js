const express = require('express');
const router = express.Router();

// Simular usuarios
const users = { admin: 'password1', user2: 'password2' };

router.get('/', (req, res) => {
  if (req.session.username) {
    res.redirect('/chat.html');
  } else {
    res.render('index', { title: 'Login' });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    req.session.username = username;
    res.redirect('/chat.html');
  } else {
    res.status(401).send('Usuario o contraseña incorrectos');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al destruir la sesión:', err);
      return res.status(500).send('No se pudo cerrar la sesión.');
    }
    res.clearCookie('connect.sid'); // Limpia la cookie de sesión
    res.redirect('/'); // Redirige al login
  });
});

module.exports = router;

function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var message = document.getElementById('loginMessage');

  if (username === 'noymi' && password === '2000') {
    // Acceso concedido
    message.innerHTML = 'Inicio de sesión exitoso. Redirigiendo...';
    setTimeout(function() {
      window.location.href = 'inicio.html';
    }, 1500);
  } else {
    // Acceso denegado
    message.innerHTML = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
  }
}

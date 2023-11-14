document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Aquí puedes agregar lógica para verificar el usuario y contraseña.
  // Por simplicidad, usaremos un usuario y contraseña fijos para este ejemplo.
  const validUsername = "0";
  const validPassword = "0";
  
  if (username === validUsername && password === validPassword) {
    // Si las credenciales son correctas, redirecciona a la página de inicio.
    window.location.href = "inicio.html";
  } else {
    // Mostrar mensaje de error en lugar de "Esta página dice".
    alert("Error: Usuario o contraseña incorrectos. Inténtalo nuevamente.");
  }
});

/*  js para colores de Misaki */
const apodoElement = document.querySelector(".apodo");

function changeColor() {
  const colors = ["pink", "purple", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  apodoElement.style.color = randomColor;
}

// Cambiar color cada 3 segundos
setInterval(changeColor, 3000);

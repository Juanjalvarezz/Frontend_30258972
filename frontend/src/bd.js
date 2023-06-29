
const formPost = document.getElementById('postUsuario');

formPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const nombre = e.target.nombre.value;
  const apellido = e.target.apellido.value;
  const email = e.target.email.value;
  const asunto = e.target.asunto.value;
  const mensaje = e.target.mensaje.value;

  await fetch('http://127.0.0.1:3000/user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre: nombre, apellido: apellido, email: email, asunto: asunto, mensaje: mensaje}),
  })
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
    });

  document.getElementById('textoPost').innerHTML = message;
});

export {formPost}
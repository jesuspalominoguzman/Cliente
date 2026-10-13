window.alert("Esto es un mensaje de alerta! Clica para continuar");

let confirmación = window.confirm(
  "Te mostraré un mensaje con la respuesta de este confirm",
);

if (confirmación) {
  window.alert("Has confirmado!");
} else {
  window.alert("Has cancelado!");
}

let prompt = window.prompt("Escribe algo para continuar", "Algo");

window.alert("Has escrito: " + prompt);

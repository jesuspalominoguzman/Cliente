console.log(
  document.getElementById("titulo").textContent + " -> get via getElementById",
);

console.log(
  document.getElementsByClassName("parrafo")[0].textContent +
    " -> get via getElementsByClassName",
);

console.log(
  document.getElementsByClassName("parrafo")[1].textContent +
    " -> get via getElementsByClassName",
);

console.log(
  document.getElementsByName("nombre")[0].placeholder +
    " -> get via getElementsByName",
);

console.log(
  document.getElementsByName("apellido")[0].placeholder +
    " -> get via getElementsByName",
);

console.log(
  document.getElementsByTagName("li")[0].textContent +
    " -> get via getElementsByTagName",
);

console.log(
  document.getElementsByTagName("li")[1].textContent +
    " -> get via getElementsByTagName",
);

console.log(
  document.getElementsByTagName("li")[2].textContent +
    " -> get via getElementsByTagName",
);

console.log(
  document.querySelector("#titulo").textContent + " -> get via querySelector",
);

console.log(
  document.querySelectorAll(".parrafo")[0].textContent +
    " -> get via querySelectorAll",
);

console.log(
  document.querySelectorAll(".parrafo")[1].textContent +
    " -> get via querySelectorAll",
);

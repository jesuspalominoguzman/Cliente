const img = document.createElement('img');
img.setAttribute('src', './assests/img_la.jpg');
img.setAttribute('alt', 'LA');

// 2. Crear el encabezado h1 y añadirle su texto interno
const h1 = document.createElement('h1');
h1.textContent = 'This is a Heading';

// 3. Crear el primer párrafo y añadirle su texto
const p1 = document.createElement('p');
p1.textContent = 'This is a paragraph.';

// 4. Crear el segundo párrafo y añadirle su texto
const p2 = document.createElement('p');
p2.textContent = 'This is a another paragraph.';

// 5. (Opcional según la imagen de salida final donde aparecen tres párrafos, 
// o si quieres ajustarte estrictamente al código HTML del enunciado que muestra dos, 
// añadimos los que correspondan para coincidir con la vista previa).
const p3 = document.createElement('p');
p3.textContent = 'This is a another paragraph.';

// 6. Insertar todos los elementos creados dentro del <body> del documento
document.body.appendChild(img);
document.body.appendChild(h1);
document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);
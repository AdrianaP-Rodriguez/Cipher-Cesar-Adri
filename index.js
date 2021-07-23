// importar el objeto del archivo cipher.js
import cipher from './cipher.js';



//convertir minusculas a mayusculas

document.getElementById("mensaje").addEventListener("keyup", function() {
    this.value = this.value.toUpperCase();
});

// boton cifrar
document.getElementById("cifrar").addEventListener("click", function() {
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    desplazamiento = parseInt(desplazamiento);
    document.getElementById("mensaje2").value = cipher.encode(desplazamiento, texto);
});
// boton descifrar
document.getElementById("descifrar").addEventListener("click", function() {
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    desplazamiento = parseInt(desplazamiento);
    document.getElementById("mensaje2").value = cipher.decode(desplazamiento, texto);

});
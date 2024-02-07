let textoIngresado = '';
let textoEncriptado = '';
let compararLetra = 0;
let vocales = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};
let texto = document.getElementById('mostarTextoEncriptado');
let botonCopiar = document.getElementById('botonCopiar');

limpiarCaja()

document.getElementById("mostarTexto").style.display = "none";

function encriptarTexto() {
    let textoUsuario = document.getElementById('ingresarTexto').value;

    textoIngresado = textoUsuario
    textoEncriptado = '';

    compararLetra = 0;

    while(compararLetra < textoIngresado.length) {

        let letra = textoIngresado[compararLetra];
        let encriptacion = vocales[letra];

        if(encriptacion) {
            textoEncriptado += encriptacion
        } else {
            textoEncriptado += letra
        }

        compararLetra++;

    } 

    console.log(textoEncriptado)
         
    let mostrarTextoEncriptado = document.getElementById('mostarTextoEncriptado');
    mostrarTextoEncriptado.innerHTML = textoEncriptado;

    ocultarImagen()

    limpiarCaja();

}

function textoDesencriptado() {
    let textoUsuario = document.getElementById('ingresarTexto').value;

    let textoIngresado = textoUsuario
    .replace(/ai/gi, 'a')
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');

    console.log(textoUsuario);

    let mostrarTextoEncriptado = document.getElementById('mostarTextoEncriptado');
    mostrarTextoEncriptado.innerHTML = textoIngresado;

    ocultarImagen()

    limpiarCaja();
}

botonCopiar.addEventListener('click', e => {
    navigator.clipboard.writeText(texto.textContent)
    .then(() => {
        botonCopiar.textContent ='copiado';
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    })
});
    
    
function limpiarCaja() {
     document.querySelector('#ingresarTexto').value = '';
}

function ocultarImagen(){
    document.getElementById("div-imagen").style.display = "none";
    document.getElementById("mostarTexto").style.display = "block";
}
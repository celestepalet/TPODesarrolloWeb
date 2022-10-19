//Validación de mi formulario con Javascript

function validar_envia() {
    //valida el nombre

    if (document.formval.nombre.value.length == 0) {
        alert("Ingresa tu nombre.")
        document.formval.nombre.focus()
        return 0;
    }

    //valida el apellido

    if (document.formval.apellido.value.length == 0) {
        alert("Ingresa tu apellido.")
        document.formval.apellido.focus()
        return 0;
    }

    //valida el pais

    if (document.formval.pais.value.length == 0) {
        alert("Ingresa tu país de residencia actual.")
        document.formval.pais.focus()
        return 0;
    }

    //valida el teléfono

    telefono = document.formval.telefono.value
    telefono = validarEntero(telefono)
    document.formval.telefono.value = telefono
    if (telefono == "") {
        alert("Ingresa tu número de teléfono.")
        document.formval.telefono.focus()
        return 0;
    }

    //el formulario se envia
    alert("¡Muchas gracias! Pronto te estaremos contactando.");
    document.formval.submit();
}

function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}
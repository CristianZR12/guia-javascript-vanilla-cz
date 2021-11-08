function getCadenaEj5() {

    const $ = element => document.querySelector(element);

    const formCadenaEj5 = $('#formCadenaEj5');
    const cadenaInput = $('#cadenaEj5');
    const divJ5E = $('#divContentDEj5P');
    const pDivJ5E = $('#contentEj5P');
    const btnClear = $('#btnClearEj5');

    formCadenaEj5.addEventListener('submit', (e) => {
        e.preventDefault();

        const cadena = cadenaInput.value;

        if (cadena === '') {
            pDivJ5E.textContent = 'Por favor ingresar datos en el Campo Nombre.';
            pDivJ5E.className += 'red-text';
            divJ5E.style.display = 'block';
        } else {

            if (cadena === cadena.toUpperCase()) {
                pDivJ5E.textContent = 'La cadena ingresada está compuesta por letras mayúsculas.';
                pDivJ5E.className += 'black-text';
                divJ5E.style.display = 'block';
            } else if (cadena === cadena.toLowerCase()) {
                pDivJ5E.textContent = 'La cadena ingresada está compuesta por letras minúsculas.';
                pDivJ5E.className += 'black-text';
                divJ5E.style.display = 'block';
            } else {
                pDivJ5E.textContent = 'La cadena ingresada está compuesta por letras minúsculas y mayúsculas.';
                pDivJ5E.className += 'black-text';
                divJ5E.style.display = 'block';
            }
        }
    });

    btnClear.addEventListener('click', () => {
        pDivJ5E.textContent = '';
        pDivJ5E.className = '';
        divJ5E.style.display = 'none';
    });
}

export { getCadenaEj5 }
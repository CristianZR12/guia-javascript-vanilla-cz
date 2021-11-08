function showNumberValidation() {

    const $ = element => document.querySelector(element);

    const formEj3 = $('#formEj3P');
    const number1Input = $('#number1Ej3P');
    const number2Input = $('#number2Ej3P');
    const divContent = $('#divContentEj3P');
    const textContent = $('#contentEj3P');
    const btnClear = $('#btnClearEj3P')

    formEj3.addEventListener('submit', (e) => {
        e.preventDefault();

        const number1 = parseInt(number1Input.value);
        const number2 = parseInt(number2Input.value);

        if (isNaN(number1)) {
            textContent.textContent = 'Dato Vacío, Por favor ingrese un valor en el campo Número 1.';
            textContent.className = 'red-text';
            divContent.style.display = 'block';
        } else if (isNaN(number2)) {
            textContent.textContent = 'Dato Vacío, Por favor ingrese un valor en el campo Número 2.';
            textContent.className = 'red-text';
            divContent.style.display = 'block';
        } else {

            var data = '';

            if (number2 > number1) {
                data += 'El número 1 no es mayor que número 2.';
            }

            if (number2 > 0) {
                data += ' El número 2 es positivo.';
            }

            if (number1 < 0 || number1 != 0) {
                data += ' El número 1 es negativo o distinto de 0.';
            }

            if (number1 + 1 < number2) {
                data += ' Incrementar en 1 unidad el valor del número 1 no lo hace mayor que el número 2.'
            }

            textContent.textContent = data;
            textContent.className = 'black-text';
            divContent.style.display = 'block';
        }
    });

    btnClear.addEventListener('click', () => {
        textContent.textContent = '';
        textContent.className = 'black-text';
        divContent.style.display = 'none';
    });
}

export { showNumberValidation };
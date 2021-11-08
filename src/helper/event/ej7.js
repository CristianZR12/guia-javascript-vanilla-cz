function getNumeroPrimo() {

    const $ = element => document.querySelector(element);

    const formEj7 = $('#formNumPEj7P');
    const number1Input = $('#numberPEj7P');
    const divContent = $('#divContentEj7P');
    const text = $('#contentEj7P');
    const btnClear = $('#btnClearEj7P');

    formEj7.addEventListener('submit', (e) => {
        e.preventDefault();

        const number1 = parseInt(number1Input.value);

        if (isNaN(number1)) {
            text.textContent = 'Dato Vacío. Por favor ingrese datos en el campo Número 1';
            text.className = 'red-text';
            divContent.style.display = 'block';
        } else {
            var data = '';

            if (number1 === 0 || number1 === 1 || number1 === 4) {
                data = `El número ${number1} no es un número primo.`;
                text.textContent = data;
                text.className = 'black-text';
                divContent.style.display = 'block';
                return;
            }

            for (let x = 2; x < number1 / 2; x++) {
                if (number1 % x == 0) {
                    data = `El número ${number1} no es un número primo.`;
                    text.textContent = data;
                    text.className = 'black-text';
                    divContent.style.display = 'block';
                    return;
                }
            }

            data = `El número ${number1} es un número primo.`;

            text.textContent = data;
            text.className = 'black-text';
            divContent.style.display = 'block';
        }
    });

    btnClear.addEventListener('click', () => {
        text.textContent = '';
        text.className = 'black-text';
        divContent.style.display = 'none';
        number1Input.value = '';
    });
}

export { getNumeroPrimo };
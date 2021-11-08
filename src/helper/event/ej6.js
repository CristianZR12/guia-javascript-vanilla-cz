function getNumeroPar() {

    const $ = element => document.querySelector(element);

    const form = $('#formEj6P');
    const number1Input = $('#numberEj6P');
    const div = $('#divContenetEj6P');
    const text = $('#contentEj6P');
    const btnHidde = $('#btnHidde');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const number1 = parseInt(number1Input.value);

        if (isNaN(number1)) {
            text.textContent = "Dato Vacío. Por favor ingresar datos en el campo Número 1.";
            text.className = 'red-text';
            div.style.display = 'block';
        } else {

            var data = '';

            if (number1 % 2 === 0) {
                data = `El número: ${number1} es Par.`;
            } else {
                data = `El número: ${number1} es Impar.`;
            }

            text.textContent = data;
            text.className = 'black-text';
            div.style.display = 'block';
        }
    });

    btnHidde.addEventListener('click', () => {
        text.textContent = '';
        text.className = 'black-text';
        div.style.display = 'none';
    })
}

export { getNumeroPar };
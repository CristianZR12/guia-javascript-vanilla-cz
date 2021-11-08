function getAndShowFactorialNumber() {

    const $ = element => document.querySelector(element);

    const formFN = $('#form_num_fectorial');
    const num_F = $('#num_factorial');
    const divEj4 = $('#resultEj4P');


    formFN.addEventListener('submit', (e) => {
        e.preventDefault();

        const number = parseInt(num_F.value);
        var resultado = 1;

        if (isNaN(number)) {
            divEj4.innerHTML = `<p class="red-text">Por favor ingrese un valor en el formulario.</p>`;
        } else {
            if (number == 0) {
                resultado = 0;
            }

            for (var i = 1; i <= number; i++) {
                resultado *= i;
            }

            divEj4.innerHTML = `<p>El número factorial de ${number} es igual a: ${resultado}.</p>`;
        }
    });
}

export { getAndShowFactorialNumber };
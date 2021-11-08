const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];

function showMonthByConsole() {
    if (meses.length > 0) {
        meses.forEach((m) => {
            console.log(m);
        });
    } else {
        console.log('Ningún Mes ha sido Cargado en el Arreglo.');
    }
}


function showMonthElement() {
    let view = ``;

    if (meses.length > 0) {
        meses.forEach((m) => {
            view += `<div class="col s12 m12 xl6">
                <div class="card">
                    <div class="card-content">
                        <p class="">${m}</p>
                    </div>
                </div>
            </div>`;
        });
    } else {
        view = `<div class="col s12 m12 xl2">
            <div class="card">
                <div class="card-content">
                    <p>Ningún Mes ha sido Cargado en el Arreglo.</p>
                </div>
            </div>
        </div>`;
    }

    return view;
}

export { showMonthByConsole, showMonthElement };
const estudiantes = [{
        nombre: 'Jimmy Alexander Rocha Robleto.',
        edad: 22,
        claseCursa: 'Programación 1'
    },
    {
        nombre: 'Hasser Ismael Rizo.',
        edad: 20,
        claseCursa: 'Programación 2'
    },
    {
        nombre: 'Eddy Vladimmir López García.',
        edad: 20,
        claseCursa: 'Programación Web'
    },
    {
        nombre: 'María Gabriela Zamora RIzo.',
        edad: 17,
        claseCursa: 'Vue'
    },
    {
        nombre: 'Cristian de Jesús Zamora Rizo.',
        edad: 20,
        claseCursa: 'Angular'
    },
    {
        nombre: 'Maribel del Rosario Rizo Rodriguez.',
        edad: 34,
        claseCursa: 'React'
    },
    {
        nombre: 'Steven Guerrero Mairena.',
        edad: 19,
        claseCursa: 'Fundamentos de Programación'
    },
    {
        nombre: 'Silvio Edwin Zamora Reyes.',
        edad: 44,
        claseCursa: 'Angular'
    },
    {
        nombre: 'Rebeca',
        edad: 16,
        claseCursa: 'React'
    },
    {
        nombre: 'Janeth.',
        edad: 34,
        claseCursa: 'Vue'
    }
];

function getElementByFilter() {
    const elementos = estudiantes.filter(element => {
        return element.edad > 18 && element.edad < 25;
    });

    var view = ``;

    if (elementos.length > 0) {
        elementos.forEach((e) => {
            view += `<div class="col s12 m12 xl6">
                <div class="card">
                    <div class="card-content">
                        <p><b>${e.nombre}</b></p>
                        <br/>
                        <p>Edad: ${e.edad} años</p>
                        <br/>
                        <p>${e.claseCursa}</p>
                    </div>
                </div>
            </div>`;
        });
    }

    return view;
}

function getElementByFind() {

    const elementos = estudiantes.find(element => {
        return element.edad == 20;
    });

    var view = `<div class="col s12 m12 xl12">
        <div class="card">
            <div class="card-content">
                <p><b>${elementos.nombre}</b></p>
                <br/>
                <p>Edad: ${elementos.edad} años</p>
                <br/>
                <p>${elementos.claseCursa}</p>
            </div>
        </div>
    </div>`;

    return view;
}

function getElementByReduce() {

    const elementos = estudiantes.reduce((acc, el) => {
        if (el.edad >= 20 && el.edad <= 22) {
            acc.push(el);
        }

        return acc;
    }, []);

    var view = ``;

    if (elementos.length > 0) {
        elementos.forEach((elem) => {
            view += `<div class="col s12 m12 xl6">
                <div class="card">
                    <div class="card-content">
                        <p><b>${elem.nombre}</b></p>
                        <br/>
                        <p>Edad: ${elem.edad} años<p>
                        <br/>
                        <p>${elem.claseCursa}</p>
                    </div>
                </div>
            </div>`;
        });
    }

    return view;
}

export { getElementByFilter, getElementByFind, getElementByReduce }
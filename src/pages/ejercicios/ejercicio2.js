import { getMaxValueString } from '../../helper/ej2'

export default () => {
    const maxString = getMaxValueString();

    var view = ``;

    console.log(maxString);

    if (maxString !== '') {
        view = `<div class="card" id="cardEj2P">
            <div class="card-action valign center cyan darken-3">
                <h4 class="card-title white-text">Ejercicio 2</h4>
            </div>
            <div class="card-content">
                <p class="flow-text">Utilizando el siguiente arreglo let valores = [true, 5, false, “hola”,
                    “adios”, 2];
                </p>
                <br/>
                <p class="flow-text">a. Determinar cuál de los dos elementos de texto es mayor.</p>
                <br/>
                <p id="pREj2P">R= El elemento de texto con mayor valor es el "${maxString}".</p>
            </div>
        </div>`;
    }

    const divElement = document.createElement('div');
    divElement.id = 'ej2Page';

    divElement.innerHTML = view;

    return divElement;
}
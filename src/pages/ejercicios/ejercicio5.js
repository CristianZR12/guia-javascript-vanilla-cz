export default () => {

    const view = `<div class="card" id="cardEj5P">
        <div class="card-action valign center blue darken-3">
            <h4 class="card-title white-text">Ejercicio 5</h4>
        </div>
        <div class="card-content">
            <form id="formCadenaEj5">
                <div class="input-field">
                    <input id="cadenaEj5" type="text" class="validate">
                    <label id="cadenaEj5">Nombre</label>
                </div>
                <div style="margin-top: 25px">
                    <button type="submit" class="btn blue">Enviar</button>
                </div>
            </form>
            <div id="divContentDEj5P" style="margin-top: 25px;">
                <p id="contentEj5P"></p>
                <button id="btnClearEj5" class="btn red" style="margin-top: 20px;">Clear</button>
            </div>
        </div>
    </div>`;

    const divElement = document.createElement('div');
    divElement.id = 'ej5Page';

    divElement.innerHTML = view;

    return divElement;
}
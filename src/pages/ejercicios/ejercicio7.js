export default () => {

    const view = `<div class="card" id="cardNumPEj7P">
        <div class="card-action indigo darken-4 valign center">
            <h4 class="card-title white-text">Ejercicio 7 - Número Primo</h4>
        </div>
        <div class="card-content">
            <form id="formNumPEj7P">
                <div class="input-field">
                    <input id="numberPEj7P" type="number" class="validate">
                    <label for="numberPEj7P">Número 1</label>
                </div>
                <div style="margin-top: 25px;">
                    <button type="submit" class="btn">Submit</button>
                </div>
            </form>
            <div id="divContentEj7P">
                <p id="contentEj7P"></p>
                <button type="button" class="btn red" style="margin-top: 25px;" id="btnClearEj7P">Hidde</button>
            </div>
        </div>
    </div>`;

    const divElement = document.createElement('div');
    divElement.id = "ej7Page";

    divElement.innerHTML = view;

    return divElement;
}
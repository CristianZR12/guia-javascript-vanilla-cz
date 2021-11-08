export default () => {
    const view = `<div class="card" id="cardEj3P">
        <div class="card-action indigo darken-4 valign center">
            <h4 class="card-title white-text">Ejercicio 3</h4>
        </div>
        <div class="card-content">
            <form id="formEj3P">
                <div class="input-field">
                    <input type="number" class="validate" id="number1Ej3P">
                    <label for="number1Ej3P">Número 1</label>
                </div>
                <div class="input-field">
                    <input type="number" class="validate" id="number2Ej3P">
                    <label for="number2Ej3P">Número 2</label>
                </div>
                <div style="margin-top: 25px;">
                    <button type="submit" class="btn">Submit</button>
                </div>
            </form>
            <div id="divContentEj3P">
                <p id="contentEj3P"></p>
                <button class="btn red" style="margin-top: 25px;" id="btnClearEj3P">Clear</button>
            </div>
        </div>
    </div>`;

    const divElement = document.createElement('div');

    divElement.innerHTML = view;
    divElement.id = 'ej3Page';

    return divElement;
}
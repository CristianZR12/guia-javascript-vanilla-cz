export default () => {

    const view = `<div class="card" id="cardParEj6P">
        <div class="card-action light-blue darken-4 valign center">
            <h4 class="card-title white-text">Número Par o Impar (Ejercicio 6)</h4>
        </div>
        <div class="card-content">
            <form id="formEj6P">
                <div class="input-field">
                    <input type="number" class="validate" id="numberEj6P">
                    <label for="numberEj6P">Número 1</label>
                </div>
                <button type="submit" class="btn" style="margin-top: 25px;">Submit</button>
            </form>
            <div id="divContenetEj6P">
                <p id="contentEj6P"></p>
                <br/>
                <button class="btn red" type="button" id="btnHidde">Hidde</button>
            </div>
        </div>
    </div>`;

    const divElement = document.createElement('div');
    divElement.id = 'ej6Page';

    divElement.innerHTML = view;

    return divElement;
}
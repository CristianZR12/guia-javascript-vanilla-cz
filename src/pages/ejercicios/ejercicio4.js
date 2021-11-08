export default () => {

    var view = `<div class="card" id="cardEj4P">
        <div class="card-action">
            <h4 class="card-title">Factorial de un Número (Ej.4)</h4>
        </div>
        <div class="card-content">
            <form id="form_num_fectorial">
                <div class="input-field">
                    <input id="num_factorial" type="number" class="validate"> 
                    <label for="num_factorial">Número Factorial</label>
                </div>
                <div>
                    <button type="submit" class="waves-effect waves-light btn">Submit</button>
                </div>
            </form>
            <div id="resultEj4P"></div>
        </div>
    </div>`;

    const divElement = document.createElement('div');
    divElement.id = 'ej4Page';

    divElement.innerHTML = view;

    return divElement;
}
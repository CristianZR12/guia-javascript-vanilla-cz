export default () => {

    const views = `<div class="card" id="cardHomePage">
        <div class="card-action valign center blue darken-3">
            <span class="card-title white-text">Bienvenidos</span>
        </div>
        <div class="card-content">
            <p>Bienvenidos al Programa Guia Javascript Vanilla, elaborado por el estudiante Cristian de Jesús Zamora Rizo, este programa constará con una serie de ejercicios elaborados con el fin de prácticar un poco e ir mejorando con el lenguaje de javascript, si quieres saber más información sobre esta aplicación, dar click al botón About.</p>
            <div id="btnHomeP">
                <a class="btn" href="#/about">About</a>
            </div>
        </div>
    </div>`;

    const divElement = document.createElement('div');
    divElement.id = 'HomePage';

    divElement.innerHTML = views;

    return divElement;
}
export default () => {

    const views = `<div style="text-align: center;">
        <h3 class="white-text">ERROR 404</h3>
        <p class="flow-text white-text">Página No Encontrada</p>
    </div>`;

    const divElement = document.createElement('div');
    divElement.id = 'error404';
    divElement.innerHTML = views;

    return divElement;
}
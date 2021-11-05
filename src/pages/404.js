export default () => {

    const views = `<div col s10 m10 xl5>
        <p>ERROR 404</p>
    </div>`;

    const divElement = document.createElement('div');
    divElement.id = 'error404';

    divElement.innerHTML = views;
    divElement.classList = 'row';

    return divElement;
}
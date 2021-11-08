import { showMonthByConsole, showMonthElement } from '../../helper/meses';

export default () => {
    const views = showMonthElement();

    const divElement = document.createElement('div');
    divElement.classList = 'container valign center';
    divElement.id = 'ej1Page';

    const rowElement = document.createElement('div');
    rowElement.classList = 'row';

    rowElement.innerHTML = views;

    const titleT = document.createElement('p');
    titleT.textContent = 'Meses del Año';
    titleT.classList = 'flow-text white-text';

    divElement.appendChild(titleT);
    divElement.appendChild(rowElement);

    //showMonthByConsole();

    return divElement;
}
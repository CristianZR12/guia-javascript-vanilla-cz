import { getElementByFilter, getElementByFind, getElementByReduce } from '../../helper/ej8';

export default () => {
    const viewFilter = getElementByFilter();
    const viewFind = getElementByFind();
    const viewReduce = getElementByReduce();

    const divElement = document.createElement('div');
    const filterElement = document.createElement('div');
    const reduceElement = document.createElement('div');
    const findElement = document.createElement('div');

    divElement.classList = 'container';
    filterElement.classList = 'row';
    findElement.classList = 'row';
    reduceElement.classList = 'row';

    const pFilter = document.createElement('p');
    pFilter.textContent = 'Buscar estudiantes con edad menor a 18 y mayor de 25 con la función Filter.';
    pFilter.classList = 'flow-text white-text'

    const pFind = document.createElement('p');
    pFind.textContent = 'Utilizando la función find muestre al estudiante que tenga 20 años.';
    pFind.classList = 'flow-text white-text';
    pFind.style.marginTop = '45px';

    const pReduce = document.createElement('p');
    pReduce.textContent = 'Utilizando la función reduce agregue en un nuevo arreglo a los estudiantes que tienen entre 20 y 22 años de edad.';
    pReduce.classList = 'flow-text white-text';
    pReduce.style.marginTop = '45px';

    filterElement.innerHTML = viewFilter;
    findElement.innerHTML = viewFind;
    reduceElement.innerHTML = viewReduce;

    divElement.style.paddingTop = '30px';
    divElement.style.paddingBottom = '30px';

    divElement.appendChild(pFilter);
    divElement.appendChild(filterElement);
    divElement.appendChild(pFind);
    divElement.appendChild(findElement);
    divElement.appendChild(pReduce);
    divElement.appendChild(reduceElement);

    return divElement;
}
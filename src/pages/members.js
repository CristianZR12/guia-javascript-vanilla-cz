import { members } from '../helper/member.list';

export default () => {
    var view = ``;

    if (members.length > 0) {
        members.forEach(mb => {
            view += `<div class="card" id="cardMembersPage">
                <div class="card-action valign center indigo darken-3">
                    <span class="card-title white-text">${mb.firstName} ${mb.lastName}</span>
                </div>
                <div class="card-content">
                    <div class="containerFMB">
                        <div id="divIMP">
                            <img class="imageMP" src="./src/assets/img/${mb.imageUrl}" alt="Imágen No Encontrada" />
                        </div>
                        <div id="divPMP">
                            <p>${mb.description}</p>
                            <p id="FNMB">${mb.age}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        });
    } else {
        view = `<div class="card" id="cardMembersPage">
            <div class="card-content valign center">
                <p>Error en la carga de Miebros, ningún elemento en el arreglo...</p>
            </div>
        </div>`;
    }

    const divElement = document.createElement('div');
    divElement.id = 'MembersPage';

    divElement.innerHTML = view;

    return divElement;
}
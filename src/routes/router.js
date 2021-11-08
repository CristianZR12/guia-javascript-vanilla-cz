import { pages } from '../pages/index';
import { event } from '../helper/event/index';

const $ = element => document.querySelector(element);

const root = $('#app');

function Router(router) {

    root.innerHTML = ``;

    switch (router) {
        case '#/':
            {
                return root.appendChild(pages.home());
            }

        case '#/members':
            {
                return root.appendChild(pages.members());
            }
        case '#/ejercicio1':
            {
                return root.appendChild(pages.ej1());
            }
        case '#/ejercicio2':
            {
                return root.appendChild(pages.ej2());
            }

        case '#/ejercicio3':
            {
                root.appendChild(pages.ej3());
                event.ejercicio3Event();
                break;
            }

        case '#/ejercicio4':
            {
                root.appendChild(pages.ej4());
                event.ejercicio4Event();
                break;
            }
        case '#/ejercicio5':
            {
                root.appendChild(pages.ej5());
                event.ejercicio5Event();
                break;
            }
        case '#/ejercicio8':
            {
                root.appendChild(pages.ej8());
                break;
            }

        default:
            {
                return root.appendChild(pages.error404());
            }
    }
}

export default Router;
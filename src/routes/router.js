import { pages } from '../pages/index';

const $ = element => document.querySelector(element);

const root = $('#app');

function Router(router) {

    root.innerHTML = ``;

    switch (router) {
        case '#/':
            {
                return root.appendChild(pages.home());
            }

        default:
            {
                return root.appendChild(pages.error404());
            }
    }
}

export default Router;
import '../css/main.css';

import Router from '../../routes/router';

import Navbar from '../../shared/navbar';

const $ = element => document.querySelector(element);

window.addEventListener('load', init);

function init() {
    if (window.location.hash == '') {
        window.history.pushState(null, '', '#/');
    }

    Router(window.location.hash);

    window.addEventListener('hashchange', () => {
        Router(window.location.hash);
    });

}

const navbar = $('#navbarE');

Navbar(navbar);
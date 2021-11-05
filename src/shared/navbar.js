export default (navbar) => {

    let $ = element => document.querySelector(element);

    var views = ``;

    if (localStorage.getItem('user')) {
        views = `<p>Hello Users</p>`;
    } else {
        views = `<div class="nav-wrapper">
            <a href="#/" class="brand-logo left" style="margin-left: 40px;">CJZR</a>
            <ul id="nav-mobile" class="right" style="margin-right: 40px;">
                <li><a href="#/about">Acerca de</a></li>
                <li><a href="#/members">Participante</a></li>
                <li>
                    <a class='dropdown-trigger' href='#' data-target='dropdown1ExcN'>Ejercicios</a>
                    <ul id='dropdown1ExcN' class='dropdown-content'>
                        <li><a href="#/ej1">one</a></li>
                        <li class="divider" tabindex="-1"></li>
                        <li><a href="#!">two</a></li>
                    </ul>
                </li>
            </ul>
        </div>`;
    }

    navbar.innerHTML = views;
}
export default () => {

    const views = `<h1>Hello World</h1>`;

    const divElement = document.createElement('div');

    divElement.innerHTML = views;

    return divElement;
}
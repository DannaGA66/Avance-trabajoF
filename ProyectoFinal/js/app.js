'use strict';

const headerLista = document.getElementsByClassName("menu");

const capturaClick = () => {
    window.location.href = 'https://www.google.com';
}
const capturaClick2 = () => {
    window.location.href = 'https://www.google.com';
}

const seccion2 = document.createElement('section');
const div1 = document.createElement('div');
const btnGuardar = document.createElement('button');


btnGuardar.id = "btnGuardar";
seccion2.id = "sec2";
div1.id = "div1";


seccion2.appendChild(btnGuardar);
document.body.appendChild(seccion2);




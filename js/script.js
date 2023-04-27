"use strict";

require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import slider from './modules/slider';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
   

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 600000);

    modal('[data-modal', '.modal', modalTimerId);
    timer('.timer', '2023, 05, 20');
    slider({
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        field: '.offer__slider-inner'
    });
    forms('form', modalTimerId);
    cards();
    calc();
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');


});
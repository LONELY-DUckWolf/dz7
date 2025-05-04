import { products } from '../data base/data.js';
import template from '../templates/template.hbs';

const html = template({ products });
document.body.innerHTML = html;

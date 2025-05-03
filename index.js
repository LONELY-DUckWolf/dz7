import { products } from './data.js';
import template from './template.hbs';

const html = template({ products });
document.body.innerHTML = html;

import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

var element = document.createElement("div");

element.innerHTML = _.join(['Another', 'module', 'loaded!'], ' ');

document.body.appendChild(element);
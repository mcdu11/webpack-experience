// import _ from "lodash";
import printMe from "./print";
import { hello } from "./assets/styles/index.css";
import { aboutBlue } from "./assets/styles/about.css";
import { SayName } from './hello';

SayName('dwq');

console.log("hello and blue:", hello, aboutBlue);
function component() {
  var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // lib
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.innerHTML = 'Hello webpak';
  element.classList.add(hello);

  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ "lodash")
    .then((module) => {
      const _ = module.default || module;
      var element = document.createElement("div");

      element.innerHTML = _.join(["Hello", "webpack"], " ");

      return element;
    })
    .catch((error) => {
      console.log('import error', error)
      return "An error occurred while loading the component"
    });
}

// document.body.appendChild(component());
setTimeout(() => {
  getComponent()
    .then((component) => {
      document.body.appendChild(component);
    })
    .catch((err) => console.error(err));
}, 4000);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}

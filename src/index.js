import _ from "lodash";
import "./styles/index.css";
import "./fonts/iconfont.css";
import Icon from "./images/logo.png";
// 可用于数据可视化时预加载数据，不用使用ajsx请求
import JsonData from './data/控件交互的类型.json';
import XmlData from './data/data.xml';

console.log("Icon", Icon);
console.log("JsonData", JsonData);
console.log("XmlData", XmlData);

function component() {
  var element = document.createElement("div");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // lib
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // element.innerHTML = "Hello Webpack";
  element.classList.add("hello");

  // image
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  // font
  const iconfont = document.createElement("span");
  iconfont.classList.add("iconfont", "icon-fx-2");
  element.appendChild(iconfont);

  return element;
}

document.body.appendChild(component());

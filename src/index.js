import _ from 'lodash';
import './css/style.css';
import Icon from './img/github-512.png';
import Logo from './img/webpack.svg';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  var webpackLogo = new Image();
  webpackLogo.src = Logo;

  element.appendChild(myIcon);
  element.appendChild(webpackLogo);

  return element;
}

document.body.appendChild(component());
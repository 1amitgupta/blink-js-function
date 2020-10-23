/**
 * File Name     : script.js
 * Published by  : F1Mate
 * Publisher URL : https://f1mate.com
 * Contributors  : f1mate, 1amitgupta (Github)
 * Version       : v1.001
 * Github URL    : https://github.com/f1mate/blink-js-function
 */

/**
 * 
 * @param {String} id <p>Element ID</p>
 */
function blinkJs(id) {
  let ele = document.getElementById(id);
  if (ele) {
    setInterval(function() {
      ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
    }, 1000);
  }
}

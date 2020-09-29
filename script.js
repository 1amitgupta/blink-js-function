/**
 * File Name     : script.js
 * Published by  : F1Mate
 * Publisher URL : https://f1mate.com
 * Contributors  : f1mate, 1amitgupta (Github)
 * Version       : v1.00
 * Github URL    : https://github.com/f1mate/blink-js-function
 */

/**
 * 
 * @param {String} ele_id <p>Element ID</p>
 */
function blinkJs(ele_id) {
  let f = document.getElementById(ele_id);
  if (f) {
    setInterval(function() {
      f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 1000);
  }
}

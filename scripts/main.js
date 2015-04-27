/* global List */
(function(List) {
  /* jshint unused: false */
  'use strict';

  var options = {
    valueNames: [ 'js_plugin-name', 'js_plugin-categories' ]
  };

  var userList = new List('js_plugins', options);

  var select  = document.getElementById('js_select-ie');
  var plugins = document.querySelectorAll('.js_plugin');
  var ie8     = document.querySelectorAll('[data-ie8]');
  var ie9     = document.querySelectorAll('[data-ie9]');
  var ie10    = document.querySelectorAll('[data-ie10]');

  function selectIE () {
    var selection = select.selectedIndex;

    show();
    switch (selection) {
      case 0:
        hideIE8();
        break;
      case 1:
        hideIE9();
        break;
      case 2:
        hideIE10();
        break;
    }

  }

  function show() {
    for (var i = 0; i < plugins.length; ++i) {
      plugins[i].style.display = "block";
    }
  }

  function hideIE8 () {
    for (var i = 0; i < ie8.length; ++i) {
      if (ie8[i].dataset.ie8 === "false") {
        ie8[i].style.display = "none";
      }
    }
  }

  function hideIE9 () {
    for (var i = 0; i < ie9.length; ++i) {
      if (ie9[i].dataset.ie9 === "false") {
        ie9[i].style.display = "none";
      }
    }
  }

  function hideIE10 () {
    for (var i = 0; i < ie10.length; ++i) {
      if (ie10[i].dataset.ie10 === "false") {
        ie10[i].style.display = "none";
      }
    }
  }

  select.addEventListener('change', selectIE);
  
  // preselect ie10
  hideIE10();
})(List);

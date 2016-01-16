(function() {
  'use strict';

  var headerHelpers = function() {

  }

  window.Globals = {
    init: function() {

      this.getStylesheets();
    },

    // Debounce
    // --------
    // Executes a function when it stops being invoked for n seconds 
    // - func     : <function> to be debounced
    // - delay    : <int> execution threshold in ms
    // - immediate: <bool> whether the func should be called at the beginning instead of at end. Defaults to false. 
    // - return   : function with debounce applied
    debounce: function(func, delay, immediate) {
      var timeout, result;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, delay);
        if (callNow) {
          result = func.apply(context, args);
        }
        return result;
      };
    },

    getStylesheets: function() {
      var styleSheets = document.styleSheets;
      console.log(styleSheets);

      // Need to learn how to use lodash + Regex to _.where classes with '.globals'
      for (var styleSheet in styleSheets) {
        if (styleSheets.hasOwnProperty(styleSheet)) {
          var rules = styleSheets[styleSheet].rules || styleSheets[styleSheet].cssRules;
          console.log(rules);
        }
      }
    }
  }

  Globals.init();
})();

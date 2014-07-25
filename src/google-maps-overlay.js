(function(root, factory) {

  // AMD
  if(typeof define === 'function' && define.amd){
    define(['backbone', 'underscore', 'google-maps', 'exports'], function(Backbone, _, maps, exports){
      return factory(root, exports, _, Backbone, maps);
    });
  }

  // Browser
  else {
    root.GoogleMapsOverlayView = factory(root, {}, root._, root.Backbone, google.maps);
  }

})(this, function(root, exports, _, Backbone, maps) {

  var view = function(){
    Backbone.View.apply(this, arguments);
  };

  view.extend = Backbone.View.extend;

  _.extend(view.prototype, Backbone.View.prototype, new maps.OverlayView());

  return view;

});

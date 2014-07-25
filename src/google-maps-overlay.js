define([
  'require', 'jquery', 'underscore', 'backbone'
], function(
  require, $, _, Backbone
){

  var view = function(){
    Backbone.View.apply(this, arguments);
  };

  view.extend = Backbone.View.extend;

  _.extend(view.prototype, Backbone.View.prototype, new google.maps.OverlayView());

  return view;

});

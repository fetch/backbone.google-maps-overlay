backbone.google-maps-overlay
============================

Google Maps Overlay in Backbone.View

### Requirements

When using with RequireJS you have to make sure you have a module named `google-maps` which returns the `google.maps` variable.

For example, with the [async plugin](https://github.com/millermedeiros/requirejs-plugins) you can define `google-maps.js` like this:

```js
define(['async!http://maps.google.com/maps/api/js?sensor=false'], function(){
  return google.maps;
});
```

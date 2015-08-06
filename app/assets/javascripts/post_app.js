window.Api = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Api.Routers.Router({ $sidebar: $('#sidebar'), $content: $('#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Api.initialize();
});

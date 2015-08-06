window.Api = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Api.Routers.Router({ $rootEl: $('#root') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Api.initialize();
});

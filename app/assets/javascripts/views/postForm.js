Api.Views.PostForm = Backbone.View.extend({
  tagName: 'form',
  template: JST["postForm"],

  events: {
    "click input.submit": "updatePost"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  updatePost: function (event) {
    event.preventDefault();
    var formData = this.$el.serializeJSON();
    this.model.save(formData, {
      success: function(model){
        this.collection && this.collection.add(model);
        Backbone.history.navigate("posts/" + this.model.get('id'), {trigger: true});
      }.bind(this),
      error: function (model, response){
        var errors = response.responseJSON;
        Object.keys(errors).forEach(function (key) {
          $("#root").append(key + " " + errors[key]);
        });
      }.bind(this)
    });
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    return this;
  },
});

Api.Views.PostsIndex = Backbone.View.extend({
  template: JST["postsIndex"],

  initialize: function(){
    this.listenTo(this.collection, "reset sync", this.render);
  },

  render: function(){
    var view = this.template();
    this.$el.html(view);
    var view = this;
    this.collection.each(function (model) {
      var itemView = new Api.Views.PostsIndexItem({ model: model });
      view.$el.find(".post-lists").append(itemView.render().$el);
    });
    return this;
  },
});

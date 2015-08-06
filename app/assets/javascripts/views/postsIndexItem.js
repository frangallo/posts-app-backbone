Api.Views.PostsIndexItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['postsIndexItem'],

  initialize: function(){
    this.listenTo(this.collection, "remove", Api.Views.PostsIndex.render);
  },

  events: {
    "click .itemDelete" : "deleteItem",
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  deleteItem: function(){
    this.model.destroy();
    this.remove();
  },
});

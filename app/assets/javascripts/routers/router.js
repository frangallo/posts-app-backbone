Api.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit",

  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.postCollection = new Api.Collections.Posts();
    this.postCollection.fetch();
  },

  postsIndex: function () {
    var indexView = new Api.Views.PostsIndex({ collection: this.postCollection });
    this.swap(indexView);
  },

  postShow: function (id) {
    var post = this.postCollection.getOrFetch(id);
    var showView = new Api.Views.PostShow({ model: post });
    this.swap(showView);
  },

  postEdit: function (id) {
    var post = this.postCollection.getOrFetch(id);
    var formView = new Api.Views.PostForm({ model: post });
    this.swap(formView);
  },

  postNew: function (id) {
    var post = new Api.Models.Post();
    var formView = new Api.Views.PostForm({ model: post, collection: this.postCollection });
    this.swap(formView);
  },

  swap: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});

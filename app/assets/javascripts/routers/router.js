Api.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "root",
    "posts/new": "postNew",
    "posts/:id": "postShow",
    "posts/:id/edit": "postEdit",

  },

  initialize: function (options) {
    this.$content = options.$content;
    this.$sidebar = options.$sidebar;
    this.postCollection = new Api.Collections.Posts();
    this.postCollection.fetch();
    this.postsIndex();
  },

  postsIndex: function () {
    var indexView = new Api.Views.PostsIndex({ collection: this.postCollection });
    this.$sidebar.html(indexView.render().$el);
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

  root: function () {
    this._currentView && this._currentView.remove();
    this._currentView = null;
  },

  swap: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$content.html(view.render().$el);
  },

  // swapIndex: function (view) {
  //   this._currentView && this._currentView.remove();
  //   this._currentView = view;
  //   this.$sidebar.html(view.render().$el);
  // },
});

Api.Views.PostShow = Backbone.View.extend({
  template: JST['postShow'],

  events: {
    "click .itemEdit" : "editItem",
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  editItem: function () {
    Backbone.history.navigate("posts/" + this.model.get("id") + "/edit", { trigger: true });
  },
});

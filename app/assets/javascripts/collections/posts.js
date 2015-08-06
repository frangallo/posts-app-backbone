Api.Collections.Posts = Backbone.Collection.extend({

  model: Api.Models.Post,
  url: "/api/posts",

  getOrFetch: function(id){
    var collection = this;
    var post = collection.get(id);

    if(!post){
      post = new Api.Models.Post({id: id});
      post.fetch({
        success: function(){
          collection.add(post);
        }
      });
    } else {
      post.fetch();
    }
    return post;
  }
});

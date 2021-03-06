var CurrentVideoView = Backbone.View.extend({
  class: 'primary-video',

  //handlebars template for main video
  template: Handlebars.compile($('#video-template').html()),


  render: function() {
    
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

});
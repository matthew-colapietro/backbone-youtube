var VideoView = Backbone.View.extend({
  class: 'video',

  template: Handlebars.compile($('#video-template').html()),


  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

})
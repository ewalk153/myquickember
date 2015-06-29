import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Em.$.get("https://api.github.com/users").then(function(data){
      console.log(data);
      return data;
    });
  },
  actions: {
    bar: function() {
      console.log('caught bar');
    }
  }
});

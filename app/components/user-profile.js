import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleHi: function() {
      this.toggleProperty('hiClemence');
      this.sendAction('action', 'foo');
    }
  },
  hiClemence: false
});

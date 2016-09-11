import Ember from 'ember';

// The extend method
//  creates a new cubclass of an Ember.Route
//  and accepts a JS object as its argument
export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('sightings');
  }
});

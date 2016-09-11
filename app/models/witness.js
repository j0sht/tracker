import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  title: DS.attr('string', {defaultValue: 'Amateur Cryptozoologist'}),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fName', 'lName', function() {
    return this.get('fName') + ' ' + this.get('lName');
  }),
  titleName: Ember.computed('lName', 'title', function() {
    return this.get('title') + ' ' + this.get('lName');
  })
});

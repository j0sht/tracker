import DS from 'ember-data';

export default DS.Model.extend({
  isNew: DS.attr('boolean', {defaultValue: false}),
  location: DS.attr('string'),
  createdAt: DS.attr('date'),
  sightedAt: DS.attr('date'),
  cryptid: DS.belongsTo('cryptid'),
  witnesses: DS.hasMany('witness')
});

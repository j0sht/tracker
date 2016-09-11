import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      fName: "Todd",
      lName: "Gandee",
      title: "Mahatma",
      email: "fake@bignerdranch.com"
    });
    let witnessRecord2 = this.store.createRecord('witness', {
      fName: "Josh",
      lName: "Tate",
      email: "jt@bignerdranch.com"
    });
    return [witnessRecord, witnessRecord2];
  }
});

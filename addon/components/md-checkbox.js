import Ember from 'ember';
import layout from '../templates/components/md-checkbox';
const { Component } = Ember;
export default Component.extend({
  layout: layout,
  classNames: ['md-checkbox'],
  classNameBindings: [
    'checked:md-checkbox--checked',
    'disabled:md-checkbox--disabled'
  ],
  checked:false,
  disabled:false,
  click() {
    if (!this.get('disabled')) {
      this.toggleProperty('checked');
    }
  }
});

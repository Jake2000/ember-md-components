import Ember from 'ember';
import layout from '../templates/components/md-radio';
const { Component, computed, observer } = Ember;
export default Component.extend({
  layout: layout,
  classNames: ['md-radio'],
  classNameBindings: [
    'checked:md-radio--checked',
    'disabled:md-radio--disabled'
  ],
  checked:false,
  disabled:false,
  checked: computed('value', 'selected', function() {
    let { value, selected } = this.getProperties('value', 'selected');
    return value === selected;
  }),
  checkedDidChange: observer('checked', function() {
    let value = this.get('value');
    if (this.get('checked')) {
      this.set('selected', value);
      this.sendAction('changed', value);
    }
  }),
  toggle: false,
  selected: null,
  click() {
    if (this.get('disabled')) {
      return;
    }
    let value = this.get('value');
    if (this.get('toggle')) {
      this.set('selected', this.get('checked') ? null : value);
    } else {
      this.set('selected', value);
    }
  }
});

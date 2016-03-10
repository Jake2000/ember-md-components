import Ember from 'ember';
import layout from '../templates/components/md-input';
const {
  Component,
  on,
  observer,
  computed,
  isEmpty,
  computed: {
    not,
    notEmpty,
    and,
    oneWay,
    alias
  }
} = Ember;
export default Component.extend({
  layout: layout,
  disabled: false,
  focus: false,
  errors: null,
  value: '',
  classNames: ['md-input-wrapper'],
  classNameBindings: [
    'focus:md-input-wrapper--focus',
    'filled:md-input-wrapper--filled',
    'danger:md-input-wrapper--danger',
    'success:md-input-wrapper--success',
    'disabled:md-input-wrapper--disabled'
  ],
  _danger: on('didRender', observer('danger', function() {
    let $input = this.$('input');
    if(this.get('danger')) {
      $input.addClass('md-input--danger');
    } else {
      $input.removeClass('md-input--danger');
    }
  })),
  _success: on('didRender', observer('success', function() {
    let $input = this.$('input');
    if(this.get('success')) {
      $input.addClass('md-input--success');
    } else {
      $input.removeClass('md-input--success');
    }
  })),
  inputElementId: computed('elementId', function() {
    return `${this.get('elementId')}-input`;
  }),
  focusIn() {
    this.set('focus', true);
  },
  focusOut() {
    this.set('focus', false);
    this.set('showError', true);
  },
  filled: computed('value', function() {
    let value = this.get('value'), length = !isEmpty(value) ? value.length : 0;
    return length > 0 ? true : false;
  }),
  actions: {
    focusIn(value) {
      this.sendAction('focus-in', value);
      this.set('focus', true);
    },
    focusOut(value) {
      this.sendAction('focus-out', value);
      this.set('focus', false);
    },
    keyDown(value, event) {
      this.sendAction('key-down', value, event);
    }
  }
});

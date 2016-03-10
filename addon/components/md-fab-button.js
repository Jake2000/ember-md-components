import Ember from 'ember';
import layout from '../templates/components/md-fab-button';
const { Component, observer } = Ember;
export default Component.extend({
  layout: layout,
  primary:  false,
  warning:  false,
  success:  false,
  danger:   false,
  disabled: false,
  small:    false,
  tagName: 'button',
  classNames: ['md-fab'],
  classNameBindings: [
    'accent:md-fab--accent',
    'primary:md-fab--primary',
    'warning:md-fab--warning',
    'success:md-fab--success',
    'danger:md-fab--danger',
    'disabled:md-fab--disabled',
    'small:md-fab--small'
  ],
  type: 'button',
  attributeBindings: [
    'accesskey',
    'autofocus',
    'disabled',
    'form',
    'formaction',
    'formenctype',
    'formmethod',
    'formnovalidate',
    'formtarget',
    'name',
    'type',
    'value'
  ],
  easing: [ 0.4, 0, 0.2, 1 ],
  active: false,
  click() {
    this.sendAction('action');
  },
  _active: observer('active', function() {
    if(this.get('speedDial')) {
      let $element = this.$();
      $element.velocity({
        scale: 0
      }, {
        duration: 140,
        easing: this.easing,
        complete: () => {
          $element.children().toggle();
          $element.velocity({
            scale: 1
          }, {
            duration: 140,
            easing: this.easing
          });
        }
      });
    }
  })
});

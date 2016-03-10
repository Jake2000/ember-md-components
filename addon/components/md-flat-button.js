import Ember from 'ember';
import layout from '../templates/components/md-flat-button';
const { Component } = Ember;
export default Component.extend({
  layout: layout,
  primary:  false,
  warning:  false,
  success:  false,
  danger:   false,
  disabled: false,
  small:    false,
  large:    false,
  block:    false,
  tagName: 'button',
  classNames: ['md-btn', 'md-btn--flat'],
  classNameBindings: [
    'primary:md-btn--primary',
    'warning:md-btn--warning',
    'success:md-btn--success',
    'danger:md-btn--danger',
    'disabled:md-btn--disabled',
    'small:md-btn--small',
    'large:md-btn--large',
    'block:md-btn--block'
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
  ]
});

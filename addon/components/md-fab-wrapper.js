import Ember from 'ember';
import layout from '../templates/components/md-fab-wrapper';
const { Component } = Ember;
export default Component.extend({
  layout: layout,
  small:     false,
  speedDial: false,
  active:    false,
  classNameBindings: [
    'small:md-fab-wrapper--small:md-fab-wrapper',
    'speedDial:md-fab-wrapper--speed-dial',
    'active:md-fab-wrapper--active'
  ],
  actions: {
    close() {
      if(this.get('speedDial')) {
        this.toggleProperty('active');
      }
    }
  }
});

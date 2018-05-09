 /**
 *
 * Vue-Video-Player
 * Adapted from Videojs (https://github.com/videojs/video.js)
 *
 */

 function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

 var window = _interopDefault(require('global/window'));
window.videojs = require('video.js')
videojs = videojs.default || videojs
var playerComponent = require('./src/player.vue')
playerComponent = playerComponent.default || playerComponent

var videoPlayer = {
  videojs: videojs,
  videoPlayer: playerComponent,
  install: function(Vue) {
    Vue.component(playerComponent.name, playerComponent)
  }
}

module.exports = videoPlayer

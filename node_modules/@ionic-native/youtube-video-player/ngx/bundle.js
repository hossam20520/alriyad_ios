'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var YoutubeVideoPlayer = /** @class */ (function (_super) {
    tslib.__extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { return core.cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayer.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayer.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayer.platforms = ["Android", "iOS"];
    YoutubeVideoPlayer.decorators = [
        { type: core$1.Injectable }
    ];
    return YoutubeVideoPlayer;
}(core.IonicNativePlugin));

exports.YoutubeVideoPlayer = YoutubeVideoPlayer;

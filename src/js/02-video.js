import Player from '@vimeo/player';

let throttle = require('lodash.throttle');

const video = document.querySelector('#vimeo-player');
const player = new Player(video);

const setCurrentTime = throttle(event => localStorage.setItem('videoplayer-current-time', event.seconds), 1000);

player.on('timeupdate', setCurrentTime);

const getCurrentTime = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(getCurrentTime);


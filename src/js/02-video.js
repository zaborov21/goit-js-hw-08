
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');


const player = new Vimeo.Player(iframe);


const onPlay = function (timeupdate) {

    const currentTime = timeupdate.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
    // console.log(currentTime);

};

player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

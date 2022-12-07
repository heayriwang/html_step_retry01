$('#main_video').YTPlayer({
    videoURL: 'https://youtu.be/wkQ1r_jye5w',
    containment: '.video_wrap',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: false,
});

$('.pause').on('click', function () {
    $('#main_video').YTPPause();
});
$('.play').on('click', function () {
    $('#main_video').YTPPlay();
});
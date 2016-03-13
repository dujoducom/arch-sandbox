// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = $.args;
$.AudioStop.open();


$.stopModel.set(args.stopModel.attributes);

var player = Ti.Media.createSound({url:args.stopModel.attributes.audioPath});
var isPlaying = false;
function backButton(e) {
	$.AudioStop.close();
}

function playButton(e) {
	if(isPlaying == false) {
		player.play();
		$.btnPlayPause.image = '/pauseButton.png';
		isPlaying = true;
	} else {
		player.pause();
		$.btnPlayPause.image = '/playButton.png';
		isPlaying = false;
	}
}

$.AudioStop.addEventListener('close',function() {
    player.stop();
    if (Ti.Platform.osname === 'android')
    { 
        player.release();
    }
});

function updateLabel(e){
   
}

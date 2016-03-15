// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = $.args;
$.AudioStop.open();


$.stopModel.set(args.stopModel.attributes);

var player = Ti.Media.createSound({url:args.stopModel.attributes.audioPath});


var isPlaying = false;

function backButton(e) {
	$.AudioStop.close();
}

var imgs = JSON.parse(args.stopModel.attributes.additionalImages);

if(imgs.length > 0) {
	imgs.forEach(function(img) {
		var i = Ti.UI.createImageView({
		  image:img
		});
		$.stopImagesScroll.addView(i);
		//$.stopImagesScrollView.add(i);
	});
}
var p = require("page.indicator");
p.pageIndicator($.stopImagesScroll, {color:'white', containerBottom: '10'});

function updateAudioStatus() {
	$.sliderAudioPosition.text = ms2TimeString(player.getTime());
	$.audioSlider.value = player.getTime();
	
}

function ms2TimeString(a,k,s,m,h){
 return k=a%1e3, // optimized by konijn
  s=a/1e3%60|0,
  m=a/6e4%60|0,
  h=a/36e5%24|0,
  (h?(h<10?'0'+h:h)+':':'')+ // optimized
  (m<10?0:'')+m+':'+  // optimized
  (s<10?0:'')+s
}

/*
function ms2TimeString(a,k,s,m,h){
 return k=a%1e3, // optimized by konijn
  s=a/1e3%60|0,
  m=a/6e4%60|0,
  h=a/36e5%24|0,
  (h?(h<10?'0'+h:h)+':':'')+ // optimized
  (m<10?0:'')+m+':'+  // optimized
  (s<10?0:'')+s+'.'+ // optimized
  (k<100?k<10?'00':0:'')+k // optimized
}
*/

var intervalControl;
function playButton(e) {
	
	if(isPlaying == false) {
		player.play();
		$.btnPlayPause.image = '/pauseButton.png';
		isPlaying = true;
		
		//$.sliderAudioDuration.text = player.duration / 1000;
		$.sliderAudioDuration.text = ms2TimeString(player.duration);
		$.sliderAudioPosition.text = '00:00';
		$.audioSlider.max = player.duration;
		intervalControl = setInterval(updateAudioStatus, 1000);
		
	} else {
		player.pause();
		$.btnPlayPause.image = '/playButton.png';
		isPlaying = false;
		clearInterval(intervalControl);
	}
	
}

playButton({empty:null});

$.AudioStop.addEventListener('close',function() {
    player.stop();
    clearInterval(intervalControl);
    if (Ti.Platform.osname === 'android')
    { 
        player.release();
    }
});


$.audioSlider.addEventListener('touchend', function() {
	player.setTime($.audioSlider.value);
});

function updateLabel(e){
   
}

function startButton(e) {
	player.reset();
	$.audioSlider.value = 0;
	player.play();
}

function volumeButton(e) {
	
}

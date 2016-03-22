// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = $.args;
$.AudioStop.open();


$.stopModel.set(args.stopModel.attributes);

var player = Ti.Media.createSound({url:args.stopModel.attributes.audioPath});
player.volume = Alloy.Globals.soundVolume;


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
		
		i.addEventListener('click', mediaClick);
		
		$.stopImagesScroll.addView(i);
		
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

var transparentBg = Ti.UI.createView({
	height: Titanium.UI.FILL,
	width: Titanium.UI.FILL,
	backgroundColor: 'black',
	opacity: 0.7
});

var volContainer = Ti.UI.createView({
	height: Ti.UI.FILL,
	width: Ti.UI.FILL
});

var volSlider = Ti.UI.createSlider({
	width: Ti.UI.FILL,
	min: 0,
	max: 10,
	top: 20,
	value: Alloy.Globals.soundVolume * 10
});

volSlider.addEventListener('change', function(e) {
	Alloy.Globals.soundVolume = e.value / 10;
	player.volume = Alloy.Globals.soundVolume;
});

var sliderContainer = Ti.UI.createView({
	width: Ti.UI.FILL,
	left: 10,
	right: 10,
	height: 100,
	backgroundColor: '#0076db',
	layout: 'vertical',
	bubbleParent: false,
	bottom: 0
});

sliderContainer.add(Ti.UI.createLabel({
	text:'Volume:',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	left: 18,
	top: 12,
	font: {fontSize: 20, fontWeight: 'bold'},
	color: 'white'
}));

sliderContainer.add(volSlider);

volContainer.add(transparentBg);
volContainer.add(sliderContainer);

volContainer.addEventListener('click', function() {
		$.AudioStop.remove(volContainer);
});

function volumeButton(e) {


	$.AudioStop.add(volContainer);
	
}


function mediaClick(e) {
	img = e.source.getImage();
	var viewAudioStop = Alloy.createController('ImageMediaViewer', {img:img});
    
}

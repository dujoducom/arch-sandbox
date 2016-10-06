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

var media = JSON.parse(args.stopModel.attributes.additionalImages);

if(media.length > 0) {
	media.forEach(function(mediaData) {
		
		// this should probably be thumbnail instead
		var i = Ti.UI.createImageView({
		  image: mediaData.mediaThumbnail
		});
		
		//i.addEventListener('click', mediaClick);
		
		switch(mediaData.mediaType) {
			case "image":
				i.addEventListener('click', function(e) {
					//img = e.source.getImage();
					var viewAudioStop = Alloy.createController('ImageMediaViewer', {mediaData:mediaData});
		    
				});
			break;
			case "video":
				i.addEventListener('click', function(e) {
					// if video, launch it.
		    		playVideo(mediaData.mediaSource);
				});
			break;
		}
		
		
		
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
	opacity: 0
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
	resetVolumeInterval();
});

var sliderContainer = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: 200,
	backgroundColor: '#0076bd',
	layout: 'vertical',
	bubbleParent: false,
	bottom: -200,
	opacity: 0
});

sliderContainer.add(Ti.UI.createLabel({
	text:'VOLUME',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	left: 18,
	top: 12,
	font: {fontSize: 20, fontWeight: 'bold'},
	color: 'white'
}));

var centerButton = Ti.UI.createView({
	width: Ti.UI.FILL
});

var buttonContainer = Ti.UI.createView({
	layout: 'horizontal',
	width: Ti.UI.SIZE,
	top: 25
});

var btnVolUp = Ti.UI.createImageView({
	image:'/volUp.png', 
	height: '60%',
	right: 10
});
btnVolUp.addEventListener('click', function() {adjustVolume(0.1);});

var btnVolDown = Ti.UI.createImageView({
	image:'/volDown.png', 
	height: '60%',
	left: 10,
});
btnVolDown.addEventListener('click', function() {adjustVolume(-0.1);});

var btnExit = Ti.UI.createImageView({
	image:'/btnClose.png', 
	height: '60%',
	left: 20
});
btnExit.addEventListener('click', closeVolumePanel);


buttonContainer.add(btnVolUp);
buttonContainer.add(btnVolDown);
buttonContainer.add(btnExit);
centerButton.add(buttonContainer);

sliderContainer.add(volSlider);
sliderContainer.add(centerButton);
volContainer.add(transparentBg);
volContainer.add(sliderContainer);


volContainer.addEventListener('click', function() {
	closeVolumePanel();
});


function closeVolumePanel() {
	
	clearInterval(volumeHideInterval);
	
	transparentBg.animate({
		opacity: 0,
		duration: 200
	});
	sliderContainer.animate({
		bottom: -200,
		duration: 200,
		opacity: 0,
		curve: Ti.UI.ANIMATION_CURVE_EASE_IN
	}, function() {
		$.AudioStop.remove(volContainer);
	});
	
}


var volumeHideInterval;


function resetVolumeInterval() {
	clearInterval(volumeHideInterval);
	volumeHideInterval = setInterval(closeVolumePanel, 5000);
}

function openVolumePanel() {
	volumeHideInterval = setInterval(closeVolumePanel, 5000);
	$.AudioStop.add(volContainer);
	sliderContainer.animate({
		bottom: 0,
		duration: 200,
		opacity: 1.0,
		curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
	});
	transparentBg.animate({
		opacity: 0.7,
		duration: 200
	});
}

function adjustVolume(amt) {
	// maybe pass soundPlayer for more flexability here...
	
	if(amt > 0) {
		// if amt is positive, vol is increasing...
		if(Alloy.Globals.soundVolume + amt <= 1) {
			// if volume increases to something less than maximum
			Alloy.Globals.soundVolume += amt;
		} else {
			// if vol increases to full
			Alloy.Globals.soundVolume = 1;
		}
	} else {
		// if amt is negative, vol is decreasing...
		if(Alloy.Globals.soundVolume + amt >= 0) {
			// if volume decreases to something greater than minimum
			Alloy.Globals.soundVolume += amt;
		} else {
			// if vol decreases to minimum
			Alloy.Globals.soundVolume = 0;
		}
	}
	
	player.volume = Alloy.Globals.soundVolume;
	volSlider.setValue(Alloy.Globals.soundVolume * 10);
	//Alloy.Globals.soundVolume = e.value / 10;
	//player.volume = Alloy.Globals.soundVolume;
}



function volumeButton(e) {

	openVolumePanel();
	
}


function mediaClick(e) {
	img = e.source.getImage();
	var viewAudioStop = Alloy.createController('ImageMediaViewer', {img:img});
    
}


function playVideo(mediaSource) {
	
    var activeMovie = Titanium.Media.createVideoPlayer({
        url : mediaSource,
        backgroundColor : '#1d1d1d',
        movieControlMode : Titanium.Media.VIDEO_CONTROL_DEFAULT,
        scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
        fullscreen : true,
        autoplay : true
    });

    var closeButton = Ti.UI.createButton({
        title : "Exit Video",
        top : "0dp",
        height : "40dp",
        left : "10dp",
        right : "10dp"
    });

    closeButton.addEventListener('click', function() {
        activeMovie.hide();
        activeMovie.release();
        activeMovie = null;
    });

    activeMovie.add(closeButton);
    
}

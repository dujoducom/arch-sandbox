// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = $.args;

$.ImageMediaViewer.open();


var img = Ti.UI.createImageView({image:args.img, width: Titanium.UI.FILL});

img.addEventListener('click', function(e) {
	$.ImageMediaViewer.close();
});

$.scroller.add(img);


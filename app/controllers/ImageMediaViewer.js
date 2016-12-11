// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = $.args;

$.ImageMediaViewer.open();


var img = Ti.UI.createImageView({image:args.mediaData.mediaSource, width: Titanium.UI.SIZE, height: Titanium.UI.SIZE});

$.mediaTitle.html = args.mediaData.mediaTitle;
$.mediaDesc.html = args.mediaData.mediaDescription;

img.addEventListener('click', function(e) {
	$.ImageMediaViewer.close();
});

$.scroller.add(img);

function handleClose(e) {
	$.ImageMediaViewer.close();
}

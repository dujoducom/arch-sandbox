// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = $.args;
$.ImageMediaViewer.open();
var img = Ti.UI.createImageView({image:args.img, enableZoomControls: true, width: Titanium.UI.FILL});
$.scroller.add(img);
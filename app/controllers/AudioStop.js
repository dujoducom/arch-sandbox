// Arguments passed into this controller can be accessed off of the `$.args` object directly or:
var args = $.args;
$.AudioStop.open();


$.stopModel.set(args.stopModel.attributes);

function clickButton(e) {
	$.AudioStop.close();
}



var stopsCollection = Alloy.Collections.audioStops;
var stops = [];

stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/windhover.mp3', stopName: 'WINDHOVER HALL', stopImage: '/stop1.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! '}));
stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/windows.mp3', stopName: 'WINDHOVER LAKE WINDOWS', stopImage: '/stop2.jpg', stopDescription: 'The Lake Window. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/galleria_2.mp3', stopName: 'WEST GALLERIA', stopImage: '/stop3.jpg', stopDescription: 'Enter the Galleria on the west. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/store_2.mp3', stopName: 'GALLERIA DETAILS #1', stopImage: '/stop4.jpg', stopDescription: 'East Galleria on the Lake is a great place for something or other. blah blah. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/windhover.mp3', stopName: 'WINDHOVER HALL', stopImage: '/stop1.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/windows.mp3', stopName: 'WINDHOVER LAKE WINDOWS', stopImage: '/stop2.jpg', stopDescription: 'The Lake Window. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/galleria_2.mp3', stopName: 'WEST GALLERIA', stopImage: '/stop3.jpg', stopDescription: 'Enter the Galleria on the west. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {audioPath: '/audio/store_2.mp3', stopName: 'GALLERIA DETAILS #1', stopImage: '/stop4.jpg', stopDescription: 'East Galleria on the Lake is a great place for something or other. blah blah. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));

stops.forEach(function(stop) {
	stopsCollection.add(stop);
	stop.save();
});

/*
var stopOne = Alloy.createModel('audioStops', {audioPath: '/audio/windhover.mp3', stopName: 'Windhover Hall', stopImage: '/stop1.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});
var stopTwo = Alloy.createModel('audioStops', {audioPath: '/audio/windows.mp3', stopName: 'Windhover Lake Window', stopImage: '/stop2.jpg', stopDescription: 'The Lake Window. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});
var stopThree = Alloy.createModel('audioStops', {audioPath: '/audio/galleria_2.mp3', stopName: 'West Galleria', stopImage: '/stop3.jpg', stopDescription: 'Enter the Galleria on the west. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});
var stopFour = Alloy.createModel('audioStops', {audioPath: '/audio/store_2.mp3', stopName: 'Galleria Detail #1', stopImage: '/stop4.jpg', stopDescription: 'East Galleria on the Lake is a great place for something or other. blah blah. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});

stopsCollection.add(stopOne);
stopOne.save();
stopsCollection.add(stopTwo);
stopTwo.save();
stopsCollection.add(stopThree);
stopThree.save();
stopsCollection.add(stopFour);
stopFour.save();
*/

$.index.open();

Alloy.Globals.parent = $.index;

Alloy.Globals.stopCollection = stopsCollection;

function handleClick(e) {
	var section = $.audioStopList.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);
	//alert(item.stopName.text);
	
	//http://stackoverflow.com/questions/26163719/titanium-alloy-data-binding-how-to-get-current-model-from-clicked-view
	var modelId = item.stopName.model;

    var model = stopsCollection.get(modelId);
    var stopDescription = model.get("stopDescription");
        
    //alert(stopDescription);
    
	var viewAudioStop = Alloy.createController('AudioStop', {stopModel:model});
    
}



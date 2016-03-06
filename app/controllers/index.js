

var stopsCollection = Alloy.Collections.audioStops;

var stopOne = Alloy.createModel('audioStops', {stopName: 'Windhover Hall', stopImage: '/stop1.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});
var stopTwo = Alloy.createModel('audioStops', {stopName: 'Windhover Lake Window', stopImage: '/stop2.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});
var stopThree = Alloy.createModel('audioStops', {stopName: 'West Galleria', stopImage: '/stop3.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});
var stopFour = Alloy.createModel('audioStops', {stopName: 'Galleria Detail #1', stopImage: '/stop4.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'});

stopsCollection.add(stopOne);
stopOne.save();
stopsCollection.add(stopTwo);
stopTwo.save();
stopsCollection.add(stopThree);
stopThree.save();
stopsCollection.add(stopFour);
stopFour.save();

$.index.open();

function handleClick(e) {
	var section = $.audioStopList.sections[e.sectionIndex];
	var item = section.getItemAt(e.itemIndex);
	alert(item.stopName.text);
	
	//http://stackoverflow.com/questions/26163719/titanium-alloy-data-binding-how-to-get-current-model-from-clicked-view
	var modelId = item.stopName.model;

    var model = stopsCollection.get(modelId);
    var stopDescription = model.get("stopDescription");
        
    alert(stopDescription);
}

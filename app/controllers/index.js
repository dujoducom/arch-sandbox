

var stopsCollection = Alloy.Collections.audioStops;
var stops = [];

stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/intro_calatrava_2.mp3', stopName: 'MILWAUKEE ART MUSEUM', stopImage: '/stop1.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close! '}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/calder_2.mp3', stopName: 'ALEXANDER CALDER', stopImage: '/stop2.jpg', stopDescription: 'The Lake Window. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/lake_3.mp3', stopName: 'WINDHOVER HALL', stopImage: '/stop1.jpg', stopDescription: 'The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/windows.mp3', stopName: 'WINDHOVER HALL PROW', stopImage: '/stop2.jpg', stopDescription: 'The Lake Window. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/windows.mp3', stopName: 'WINDHOVER HALL WINDOWS', stopImage: '/stop2.jpg', stopDescription: 'The Lake Window. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/wings_2.mp3', stopName: 'WINGS', stopImage: '/stop3.jpg', stopDescription: 'Enter the Galleria on the west. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/galleria_2.mp3', stopName: 'BAUMGARTNER (EAST) GALLERIA', stopImage: '/stop3.jpg', stopDescription: 'Enter the Galleria on the west. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/store_2.mp3', stopName: 'STORE', stopImage: '/stop4.jpg', stopDescription: 'East Galleria on the Lake is a great place for something or other. blah blah. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));
stops.push(Alloy.createModel('audioStops', {additionalImages:JSON.stringify(['/stop1/1.jpg', '/stop1/2.jpg']), audioPath: '/audio/reiman_2.mp3', stopName: 'REIMAN BRIDGE', stopImage: '/stop4.jpg', stopDescription: 'East Galleria on the Lake is a great place for something or other. blah blah. The beautiful Windhover hall offers striking views of the lake. Be sure to look up for a different perspective of the wings as they open and close!'}));

stops.forEach(function(stop) {
	stopsCollection.add(stop);
	stop.save();
});

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

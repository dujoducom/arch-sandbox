var stopsCollection = Alloy.Collections.audioStops;
var stops = [];

// 1
stops.push(
	Alloy.createModel(
		'audioStops', 
			{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
			audioPath: '/audio/01_intro.mp3', 
			stopName: 'INTRODUCTION', 
			stopImage: '/stops/stop01.jpg', 
			stopDescription: "Welcome to the Milwaukee Art Museum. You are standing in the Quadracci Pavilion. This addition to the Museum’s campus opened to the public in October 2001 and was designed by the Spanish architect, artist, and engineer Santiago Calatrava. This is his first building in the United States.<br /><br />Constructed with some of the longest spans of concrete, some of the biggest pieces of glass, and steel twisted in every direction, this monumental, handcrafted kinetic structure is the Museum’s largest work of art. The unprecedented design started with a dream—and developed from a sketch the architect created of a winged structure perched on the shores of Lake Michigan.<br /><br />Unlike anything that had been built before, the building has very few straight lines and required meticulous custom artisanship. Working out the geometry for a building of curves took ten times longer than had it been designed as a standard square box. Figuring out how to build something of such complexity stretched ideas and inspired new ones in the designers, the engineers, and the construction crew—all of whom were from Milwaukee firms.<br /><br />On this tour, we will look closely at the structure and the design of the Quadracci Pavilion, a building that has become both an icon for the Museum and for the city of Milwaukee."
		}));
// 2		
stops.push(
	Alloy.createModel(
		'audioStops', 
			{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
			audioPath: '/audio/02_windhover.mp3', 
			stopName: 'WINDHOVER HALL', 
			stopImage: '/stops/stop02.jpg', 
			stopDescription: 'The expansive main space you see before you is Windhover Hall. This grand hall evokes awe and stirs the imagination. It draws comparisons to a bird, to a ship, and to a gothic cathedral, with its flying buttresses, pointed arches, ribbed vaults, and a central nave. <br /><br />The name “Windhover” comes from a poem of the same name, from 1918, by Gerard Manley Hopkins. The poem marvels at the bird’s mastery of hovering in the air, and was a favorite of Harry Quadracci’s, a significant donor to the project who suggested the name.<br /><br />This hall is one of the building’s three architectural marvels. Part of what lends this space its awe factor is its uninterrupted space. At 293 feet long, the oval-shaped space, rising skyward to a glass roof 90 feet up, is without supporting columns. And its east-facing wall is a 90-foot cantilevered prow made of glass. The building is a study in counterbalances. Bearing the weight of the roof and the mast is a ring beam that encircles the pavilion at the ceiling. The beam forms the long cantilever to the east, and its 100 steel cables transfer their load to the ground through four large piers.<br /><br />All white surfaces and floor-to-ceiling windows, Windhover Hall continues to wow as it reflects the expansive lake and sky outside, sending shimmering light across the marble floor. The marble, about an acre of it, throughout the whole Pavilion, is from Carrara, Italy. Carrara marble has been used since the time of Ancient Rome; the Pantheon and Trajan’s Column in Rome are constructed of it, as are many sculptures of the Renaissance, such as Michelangelo’s <i>David</i>.'  
		}));

// 3
stops.push(
	Alloy.createModel(
		'audioStops', 
			{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
			audioPath: '/audio/03_lake.mp3', 
			stopName: 'THE LAKE', 
			stopImage: '/stops/window_interior.jpg', 
			stopDescription: 'Straight ahead, through the grand hall, is the lake. Walk with me now, to the prow, which overlooks Lake Michigan. The Museum’s lakeside setting was instrumental in Calatrava’s design for the new building. As he put it, he wanted to “add something to the lakefront. To infuse the building with a certain sensitivity to the culture of the lake—the boats, the sails and the always-changing landscape,” to use his words. As such, Calatrava included numerous nautical references throughout the building: there is the movable sunscreen, or brise soleil, that represents both a sail and the wings of a bird; the pylon of the suspension bridge that is like the abstracted mast of a ship; and the entrance to the parking garage, which mimics the mouth of a whale.<br/><br/>The lake also posed a series structural consideration. The foundation for the building needed to not only support the building, but also resist the upward pressure of the water from the lake below. Rather than pilings or piers, a 2- to 4-foot-thick slab of concrete, called a foundation mat, was specially constructed.<br/><br/>Calatrava’s first design angled even more of the Museum out over the water. But given Wisconsin’s winters and the damage ice and waves can do, the design was impractical; it also brought too much attention to the waterfront, at the expense of the city. Calatrava would later resolve both issues by pulling the prow in and adding a welcoming corridor from the city, The Reiman Pedestrian Bridge.'
		}));

// 4
stops.push(
	Alloy.createModel(
		'audioStops',
		{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
		audioPath:'/audio/04_windows.mp3', 
		stopName: 'THE WINDOWS', 
		stopImage: '/stops/window_exterior.jpg', 
		stopDescription:'From this vantage point, looking out at the lake, are you not like a captain at sea, standing at the prow of a grand ship about to set sail? Creating the impression of forward movement is the dramatic cantilever of two stories of floor-to-ceiling windows. The large panes of glass begin their ascent outward one floor below in Café Calatrava, allowing for equally picturesque views of the lakefront while visitors dine. <br /><br />Large windows that curve and lean to such a degree will inevitably shift and required specially made glass and framing. A company in Spain accepted the responsibility for manufacturing the windows in the center, the toughest, with their severe curve and angle. Fewer than 6 percent of the windows in Windhover Hall are what would be called “standard orientation”; the rest are either tilted, curved, or both. Encased in glass, the Quadracci Pavilion has 915 windows, allowing natural light in.<br /><br />Pushing material to their limits and finding new ways to use them are hallmarks of the Spanish architect. Born in Benimàmet near Valencia, Spain, in 1951, Calatrava received his undergraduate degree in architecture from the Polytechnic University of Valencia. He found the emphasis on function in architecture popular at the time frustrating. He loved art and had an interest in aesthetics. His doctoral thesis for his graduate degree in civil engineering at the Institute of Technology in Zurich was a study of structures that fold, or move—components of architecture that could mimic lifelike movement. His study combined rigorous mathematical analysis with a fluid creativity. Calatrava could now solve the engineering problems to make the organic, sculptural designs that have become his signature.'
	}));

//5
stops.push(
	Alloy.createModel(
		'audioStops',
		{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "video",
						mediaTitle: "Wings",
						mediaDescription: "See the wings open from this vantage point",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/video/wings_small.mp4",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
		audioPath: '/audio/05_wings.mp3', 
		stopName: 'BURKE BRISE SOLEIL', 
		stopImage: '/stops/stops-large-bries.jpg', 
		stopDescription:'Turning your back to the lake, direct your eyes skyward, to a glass ceiling that towers 90 feet high. The Burke Brise Soleil, or mechanical sunscreen, is another of the building’s marvels; it was the last major part of constructing the Quadracci Pavilion, and one of the most challenging. Nothing quite like it had ever been built. <br /><br />The moveable, winglike sunscreen is composed of seventy-two steel fins that open to create the Museum’s signature wings. Because the enormous wings span 217 feet, wider than a 747 airplane, they do actually create lift. A firm in Toronto conducted a series of wind-tunnel studies prior to construction to ensure that the Museum would remain on the ground. Sensors automatically close the wings if the wind speed reaches 23 mph. <br /><br />The blades themselves were made in Spain through a laborious, hands-on process. The installation crew and the engineers assembled the wings in a trial run first in Spain to troubleshoot any issues, before executing the process while working high on the spine of the building in Milwaukee.<br /><br />Even transport of these elements to Milwaukee necessitated an extraordinary solution: with the longest blades measuring 105 feet, Russian Antonov 124 cargo ships, among the largest planes in the world, were used. And once in Milwaukee, the bundles of brise soleil fins were so long that, whenever a turn had to be made by the truck carrying them, they had to be lifted by crane from the bed of one truck to another truck waiting around the corner. '
	}));

//6
stops.push(
	Alloy.createModel(
		'audioStops', 
		{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
		audioPath: '/audio/05_galleria.mp3', 
		stopName: 'GALLERIA', 
		stopImage: 'stops/stop03.jpg', 
		stopDescription: 'Take a stroll again toward the lake and turn down the long arched promenade. Baumgartner Galleria is one of two gallerias, which provide panoramic views of downtown Milwaukee to the west, and Lake Michigan to the east. Recalling buttresses of a Gothic cathedral and the ribs of a whale, the seventy-eight concrete arches of the Baumgartner and Schroeder Gallerias connect through the Baker/Rowland Galleries, the Museum Store, and the Lubar Auditorium. Smooth and precisely angled, the arches were crafted by pouring concrete into specially made wooden forms. Rather than molds constructed from wood slats, which would have left the concrete rough and seamed, the forms were made from solid pieces of wood that were laser-cut and steamed to achieve the proper curve. Gaps were filled and an epoxylike substance was used to line the forms to keep the cement smooth and from picking up the pattern of the wood’s grain. Steel bars were set in the forms to support the complex curves, and were placed in the form before the concrete was poured. <br /> <br />Curves define the majority of the surfaces throughout the pavilion, and steel—2100 tons of it—was needed to reinforce it all. Steve Chamberlain, president of the general contractor on the project, C. G. Schmidt, once commented that the pavilion is “basically a steel building covered with concrete.” While most of the steel is out of sight, you’ll notice that there are steel joints at the base of each rib; these were purposely left exposed. <br /><br >Also kept hidden, beneath the Carrara marble that you’re standing on, is PVC tubing. Six miles of the tubing circulates water to deliver eco-friendly heating and cooling to the building, keeping you comfortable.'
	}));

//7
stops.push(
	Alloy.createModel(
		'audioStops', 
		{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
		audioPath: '/audio/06_store.mp3', 
		stopName: 'MUSEUM STORE', 
		stopImage: '/stops/stop06.jpg', 
		stopDescription: 'Entering the Museum Store, Calatrava’s meticulous attention to detail is again borne out. Do the two long display cases in the center look familiar? Perhaps look toward the exit on the other side, to the Schroeder Galleria beyond. The arch-like steel supports of the cases repeat the rhythm of the gallerias’ archways, and cantilever like the windows throughout the pavilion. For Calatrava, no detail is too small; every archway, bench, light, and, in this instance, display case, is carefully considered relative to the aesthetics of the architecture as a whole. <br /><br />Made of pearwood, glass, and steel, the display cases were produced by a company in Zurich, called Hobel, that specializes in hand-built wood furniture. Two Swiss craftsmen then completed their construction on-site. Lighting the tempting treasures inside are Tivoli lights, which, while lovely, generate a great deal of heat. Forty fans had to be placed inside the cases to keep the interior cool.<br /><br />Take your time. Enjoy the items inside. Then look up. There on the ceiling extend the arches from the gallerias. Arches have long been used as supportive structures and, are, in fact, more efficient for large expanses such as the one here. But because arches are more complex to engineer, buildings today are mostly made using posts and beams. Walk through the store toward the west galleria. Exit and turn left, returning to the main entrance. '
	}));

stops.push(
	Alloy.createModel(
		'audioStops', 
		{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
		audioPath: '/audio/07_calder.mp3', 
		stopName: 'ALEXANDER CALDER', 
		stopImage: '/stops/stops-large-calder.jpg', 
		stopDescription: 'Here, just in from the front doors and above the glass surround, is the mobile Red, Black, Blue by Alexander Calder. Santiago Calatrava spotted this work at the Milwaukee County Airport on one of his many trips to the city. He had designed a spectacular building, to host spectacular art exhibitions, but it was this mobile that he wanted as the permanent, signature piece at the entrance to the Museum. The County graciously loaned Calder’s mobile to the Museum long-term. <br /><br />It is easy to see why the mobile appealed to the architect. Its circular forms beautifully echo the rotund design of the glass elevator, as well as the opening in the floor below—and it moves. Calatrava incorporates movement into his architecture because, as he once said: “it is possible, and because it is possible, it is part of our time.” Alexander Calder and Santiago Calatrava are certainly kindred spirits in that they both embrace engineering to bring their art to life.'
	}));

stops.push(
	Alloy.createModel('audioStops', 
		{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
		audioPath: '/audio/08_reiman.mp3', 
		stopName: 'REIMAN PEDESTRIAN BRIDGE', 
		stopImage: '/stops/stops-large-bridge.jpg', 
		stopDescription: 'Connecting the Museum to its community is the 280-foot Reiman Pedestrian Bridge, the building’s third architectural marvel. Spanning over the four lanes of Lincoln Memorial Drive, the bridge is suspended from 9 cables attached to a large central mast, whose length is taller than an 18-story building. Extending off the backside of the mast, eighteen cables connect to the ring beam that makes the uninterrupted, open space of Windhover Hall possible. If you recall, this ring beam encircles the Quadracci Pavilion at its ceiling, bearing the weight of the roof and the mast. This feat in counterbalancing works to the favor of the bridge as well. Angled at 48 degrees, the mast holds most of the bridge’s weight, and transfers it downward through the two boomerang-shaped structures on either side of the bridge near the Museum’s main entrance. The precisely calculated distribution of weight allows for the bridge’s seemingly lightweight appearance and thin profile. <br /> <br />Calatrava first gained architectural acclaim in Europe for designing and engineering bridges similar to this. Here, as a neighborly nod to the granite base of the War Memorial to the north, which architect Eero Saarinen designed in 1957, Calatrava used Wisconsin granite pavers to weight down the bridge. '
	}));

stops.push(
	Alloy.createModel(
		'audioStops', 
		{additionalImages:JSON.stringify(
				[
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/1.jpg",
						mediaSource: "/stop1/1.jpg",
						additionalData: {
							something: "Something"
						}
					},
					{
						mediaType: "image",
						mediaTitle: "Calatrava Drawing #1",
						mediaDescription: "This is an example of one of Santiago Calatravas concept sketches for the Quadracchi Pavillion.",
						mediaThumbnail: "/stop1/2.jpg",
						mediaSource: "/stop1/2.jpg",
						additionalData: {
							something: "Something"
						}
					}
				]
			),   
		audioPath: '/audio/09_garage.mp3', 
		stopName: 'PARKING GARAGE', 
		stopImage: '/stops/garage.jpg', 
		stopDescription: 'Lastly, we will take the stairs down into the garage. The parking garage again includes the repeated, handcrafted architectural ribs, painted white, continuing the visual connection to the building above. This is where the wooden forms for the arches in the gallerias and here in the garage were constructed. It served as an artisans’ workshop of sorts. Whereas most forms on a conventional project can be used up to twelve times, the strict requirements for the concrete arches meant that their forms could only be used three times, with attentive care following each use. <br /><br />Now a beautiful, temperature-controlled garage with some 150 spaces, the garage is lit with lights, as well as natural light, provided by the skylights on the west and east exterior walls. Each skylight also acts like a periscope. Make your way over to one of the skylights and look up. Depending on whether you are on the west or east side of the garage, you should be able to see the downtown skyline or the lake. Calatrava designed the building in such a way so that it reflects the surrounding landscape. Consider this detail a little reminder that great art, like this building, has many layers to discover.'
	}));

stops.forEach(function(stop) {
	stopsCollection.add(stop);
	stop.save();
});

setTimeout(function() {
	$.index.open();
	
}, 500);


Alloy.Globals.parent = $.index;

$.index.actionBar.hide();
 
Alloy.Globals.stopCollection = stopsCollection;

Alloy.Globals.soundVolume = 0.8;

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

/*
function playVideo(e) {
	
    var activeMovie = Titanium.Media.createVideoPlayer({
        url : '/video/wings_small.mp4',
        backgroundColor : 'blue',
        movieControlMode : Titanium.Media.VIDEO_CONTROL_DEFAULT,
        scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
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
*/

Titanium.Platform.addEventListener('battery', function(e){
  Ti.API.info('The battery state has changed to ' + e.state);
  Ti.API.info('The battery level is ' + e.level);
  Ti.API.info('The battery event source is ' + e.source);
  Ti.API.info('The battery event name ' + e.type);
});

Titanium.Gesture.addEventListener('shake', function(e){
  Ti.API.info('SHAKEN!');
});

Ti.API.info('Hello World!');

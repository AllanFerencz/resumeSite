
$(document).ready(function(){
	var waypointHit1 = false
	var waypoint1 = new Waypoint({
	  element: document.getElementById('waypoint1'),
	  handler: function(direction) {
	  		if (waypointHit1 == false){
		    	$("#graph1bar1").animate({width:'toggle'},350);
		    	$("#graph1bar2").delay(200).animate({width:'toggle'},350);
		    	$("#graph1bar3").delay(300).animate({width:'toggle'},350);
		    	$("#graph1bar4").delay(400).animate({width:'toggle'},350);
		    	$("#graph1bar5").delay(500).animate({width:'toggle'},350);
		    	$("#graph1bar6").delay(600).animate({width:'toggle'},350);
		    	$("#graph1bar7").delay(700).animate({width:'toggle'},350);
		    	$("#graph1bar8").delay(800).animate({width:'toggle'},350);
		    	$("#graph1bar9").delay(900).animate({width:'toggle'},350);
		    	waypointHit1 = true
	    	}
	    },
	    offset: 200
	})

	var waypointHit2 = false
	var waypoint2 = new Waypoint({
	  element: document.getElementById('waypoint2'),
	  handler: function(direction) {
	  		if (waypointHit2 == false){
		    	$("#graph2bar1").animate({height:"300px"},{ duration: 700, queue: false });
		    	$("#graph2bar1").animate({'margin-top':"0px"},{ duration: 700, queue: false });
		    	$("#graph2bar2").delay(200).animate({height:"300px"},{ duration: 900, queue: false });
		    	$("#graph2bar2").delay(200).animate({'margin-top':"0px"},{ duration: 900, queue: false });
		    	$("#graph2bar3").delay(400).animate({height:"183px"},{ duration: 1100, queue: false });
		    	$("#graph2bar3").delay(400).animate({'margin-top':"117px"},{ duration: 1100, queue: false });
		    	$("#graph2bar4").delay(600).animate({height:"183px"},{ duration: 1300, queue: false });
		    	$("#graph2bar4").delay(600).animate({'margin-top':"117px"},{ duration: 1300, queue: false });
		    	waypointHit2 = true
	    	}
	    },
	    offset: 400
	})

	var waypointHit3 = false
	var waypoint3 = new Waypoint({
	  element: document.getElementById('waypoint3'),
	  handler: function(direction) {
	  		if (waypointHit3 == false){
		    	$("#graph3bar1").animate({height:"243px"},{ duration: 700, queue: false });
		    	$("#graph3bar1").animate({'margin-top':"57px"},{ duration: 700, queue: false });
		    	$("#graph3bar2").animate({height:"243px"},{ duration: 900, queue: false });
		    	$("#graph3bar2").animate({'margin-top':"57px"},{ duration: 900, queue: false });
		    	$("#graph3bar3").animate({height:"123px"},{ duration: 1100, queue: false });
		    	$("#graph3bar3").animate({'margin-top':"177px"},{ duration: 1100, queue: false });


		    	waypointHit3 = true
	    	}
	    },
	    offset: 400
	})

});
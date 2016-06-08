function displayCopyright()

	{

		var today = new Date();
		
		
		document.getElementById("copyright").innerHTML = "Allan Ferencz "+"©" + today.getFullYear();
	}


function changeNormalize()
	{
		document.getElementById("selectionTitle").innerHTML ="Database Normalization";
		document.getElementById("selectionText").innerHTML ="I'm able to normalize a database. When done correctly this can be useful for saving space and making the database efficient.";
	}

function changeObject()
	{
		document.getElementById("selectionTitle").innerHTML ="Object Oriented";
		document.getElementById("selectionText").innerHTML ="I’m an object oriented programmer. Coding in this style makes code reusable. This saves development time in the long run.";
	}

function changeSDLC()
	{
		document.getElementById("selectionTitle").innerHTML ="System Development Life Cycle";
		document.getElementById("selectionText").innerHTML ="I can create a program from scratch to shipping by hearing to SDLC principles. This is used to have an effective product ship.";
	}

function changeAgile()
	{
		document.getElementById("selectionTitle").innerHTML ="Agile Development";
		document.getElementById("selectionText").innerHTML ="I can also work in an agile development. Agile development allows for quick and flexible environment. The final product is also higher quality.";
	}

function changeDocument()
	{
		document.getElementById("selectionTitle").innerHTML ="Documentation";
		document.getElementById("selectionText").innerHTML ="I can create any documentation. This includes end user documentation, UML diagrams, system diagrams and instructions for maintaining the program";
	}


$(document).ready(function(){

	$("#pictureOfMe").delay(300).css('opacity',0).animate({'opacity': 1}, 500);
	$("#brand").slideDown();
	$("#btnShowNav").slideDown();

    $("#btnShowNav").click(function(){
        $("#navbar").slideDown("fast");
    });

	$("#btnCloseNav").click(function(){
        $("#navbar").slideUp("fast");
    });




});


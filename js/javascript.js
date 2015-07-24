// wait until page is ready to perform javascript

$(document).ready(function() {

    $(".table-date .day" + (new Date().getDay())).addClass("today-date-row");

	//setup current testimonial index and testimonial data array's
	var currentTest = 0;
    var testimonials = ["Took my dog here for the first time for a Skin issue and the vet knew exactly what was wrong and how to treat the issue. The staff were friendly and professional. The prices for services were also reasonable.", 
                        "I come all the way from Orlando.  Best vet I've been to.  Recommended to all my friends.", 
                        "Dr. Wayne and staff are great. Our three dogs get super care. Very polite and caring."];
    var testimonialNames = ["Tracy W.","Christopher B.","Ray Mikler"];
    var testimonialImages = [ "/images/test1Image.jpg","/images/test2Image.jpg","/images/test3Image.jpg"];

    setInterval(function() {testSwap()}, 10000);

    // initially set the content of the testimonial elements to index 0
    $('.testimonialText').text(testimonials[currentTest]);
    $('.testimonialName').text(testimonialNames[currentTest]);
    $('.testimonialImage').attr("src",testimonialImages[currentTest]);

    // function for when user clicks the right arrow
    $('#rightButton').click(function(){

    	// we only have three testimonials so if user clicks right at the last index reset
    	// index to 0 to loop through the array again
    	if (currentTest == (testimonials.length - 1) ) {
    		currentTest = 0;
    	}
    	else {
    		currentTest++;
    	}
    	
    	// display changed testimonials
    	$('.testimonialText').text(testimonials[currentTest]);
    	$('.testimonialName').text(testimonialNames[currentTest]);
        $( '.testimonialImage' ).attr("src",testimonialImages[currentTest]);
    });

    // function for when user clicks the left arrow
    $('#leftButton').click(function(){

    	// if user clicks left arrow when we are on first index start over from last index
    	if ( currentTest == 0 ) {
    		currentTest = testimonials.length - 1;
    	}
    	else {
    		currentTest--;
    	}
    	
    	// display changed testimonials
    	$('.testimonialText').text(testimonials[currentTest]);
    	$('.testimonialName').text(testimonialNames[currentTest]);
        $( '.testimonialImage' ).attr("src",testimonialImages[currentTest]);
    });

    function testSwap() {
        if ( currentTest != 2 ) {
            currentTest++;
            $( '.testimonialText').text(testimonials[currentTest]);
            $( '.testmonialName' ).text(testimonialNames[currentTest]);
            $( '.testimonialImage' ).attr("src",testimonialImages[currentTest]);
        }
        else {
            currentTest = 0;
            $( '.testimonialText').text(testimonials[currentTest]);
            $( '.testmonialName' ).text(testimonialNames[currentTest]);
            $( '.testimonialImage' ).attr("src",testimonialImages[currentTest]);
        }
    }
});

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { alert("Made with <3 by the 2015 HDSupply Interns"); });
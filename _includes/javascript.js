// wait until page is ready to perform javascript

$(document).ready(function() {

	//setup current testimonial index and testimonial data array's
	var currentTest = 0;
    var testimonials = ["testimonial 1", "testimonial 2", "testimonial 3"];
    var testimonialNames = ["name1","name2","name3"];

    // initially set the content of the testimonial elements to index 0
    $('.testimonialText').text(testimonials[currentTest]);
    $('.testimonialName').text(testimonialNames[currentTest]);

    // function for when user clicks the right arrow
    $('.glyphicon-arrow-right').click(function(){

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
    });

    // function for when user clicks the left arrow
    $('.glyphicon-arrow-left').click(function(){

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
    });
});

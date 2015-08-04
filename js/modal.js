$(document).ready(function() {

if (document.location.pathname.indexOf("cats") > -1) {
    loadCatImages('/js/cats.json');
} 
else if (document.location.pathname.indexOf("dogs") > -1) {
    loadDogImages('/js/dogs.json');
} 
else {
    console.error('unable to load images');
}

});


function loadDogImages(url) {
    $.getJSON(url, function(json) {
    var attributes = new Array();
    var imageGallery = $('.image-gallery');
    var imageGalleryThumbnail = $('.image-gallery .thumbnail');

    for (var i=0; i<json.dogs.length; i++) {
        var dog = json.dogs[i];
        var imgUrl = dog.image;
        var thumbnail = imageGalleryThumbnail.clone();
        thumbnail.removeClass('hidden-lg');
        thumbnail.removeClass('hidden-md');
        thumbnail.removeClass('hidden-sm');
        thumbnail.removeClass('hidden-xs');
        thumbnail.data('thumb',i);
        thumbnail.find('ul li').text(dog.name);
        thumbnail.find('img').attr('src', imgUrl);
        imageGallery.append(thumbnail);
        attributes.push({img: imgUrl, name: dog.name, age: dog.age, gender: dog.gender, breed: dog.breed, color: dog.color, behavior: dog.behavior, needs: dog.needs}); 
    }   
    
    function setModalContent($thumbNumber) {

        $('#myModal .modal-body img').last().attr('src',attributes[$thumbNumber].img);
        $('#myModal .name').html('<b>Name:</b> ' + attributes[$thumbNumber].name);
        $('#myModal .age').html('<b>Age:</b> ' + attributes[$thumbNumber].age);
        $('#myModal .gender').html('<b>Gender:</b> ' + attributes[$thumbNumber].gender);
        $('#myModal .breed').html('<b>Breed:</b> ' + attributes[$thumbNumber].breed);
        $('#myModal .color').html('<b>Color:</b> ' + attributes[$thumbNumber].color);
        $('#myModal .behavior').html('<b>Behaviors:</b> ' + attributes[$thumbNumber].behavior);
        $('#myModal .needs').html('<b>Special Needs:</b> ' + attributes[$thumbNumber].needs);
        $('#myModal .pet-name').html('Want to take ' + attributes[$thumbNumber].name + ' home?');


        /* set next and previous buttons */
        $('.prev-img').data('thumb',($thumbNumber - 1 >= 0) ? $thumbNumber - 1 : attributes.length - 1);
        $('.next-img').data('thumb',($thumbNumber + 1 < attributes.length) ? $thumbNumber + 1 : 0);
    }   

    $('.openmodal').on('click',function(){
        setModalContent($( this ).data('thumb'));
        $('#myModal').modal('show');//pop up modal
    });

    $('.modal').on('click','.prev-img',function(){ setModalContent($( this ).data('thumb'));});
    $('.modal').on('click','.next-img',function(){ setModalContent($( this ).data('thumb'));});

    });
}


function loadCatImages(url) {
    $.getJSON(url, function(json) {
    var attributes = new Array();
    var imageGallery = $('.image-gallery');
    var imageGalleryThumbnail = $('.image-gallery .thumbnail');

    for (var i=0; i<json.cats.length; i++) {
        var cat = json.cats[i];
        var imgUrl = cat.image;
        var thumbnail = imageGalleryThumbnail.clone();
        thumbnail.removeClass('hidden-lg');
        thumbnail.removeClass('hidden-md');
        thumbnail.removeClass('hidden-sm');
        thumbnail.removeClass('hidden-xs');
        thumbnail.data('thumb',i);
        thumbnail.find('ul li').text(cat.name);
        thumbnail.find('img').attr('src', imgUrl);
        imageGallery.append(thumbnail);
 attributes.push({img: imgUrl, name: cat.name, age: cat.age, gender: cat.gender, breed: cat.breed, color: cat.color, behavior: cat.behavior, needs: cat.needs});  
    }   
    
    function setModalContent($thumbNumber) {

        $('#myModal .modal-body img').last().attr('src',attributes[$thumbNumber].img);
        $('#myModal .name').html('<b>Name:</b> ' + attributes[$thumbNumber].name);
        $('#myModal .age').html('<b>Age:</b> ' + attributes[$thumbNumber].age);
        $('#myModal .gender').html('<b>Gender:</b> ' + attributes[$thumbNumber].gender);
        $('#myModal .breed').html('<b>Breed:</b> ' + attributes[$thumbNumber].breed);
        $('#myModal .color').html('<b>Color:</b> ' + attributes[$thumbNumber].color);
        $('#myModal .behavior').html('<b>Behaviors:</b> ' + attributes[$thumbNumber].behavior);
        $('#myModal .needs').html('<b>Special Needs:</b> ' + attributes[$thumbNumber].needs);
        $('#myModal .pet-name').html('Want to take ' + attributes[$thumbNumber].name + ' home?');


        /* set next and previous buttons */
        $('.prev-img').data('thumb',($thumbNumber - 1 >= 0) ? $thumbNumber - 1 : attributes.length - 1);
        $('.next-img').data('thumb',($thumbNumber + 1 < attributes.length) ? $thumbNumber + 1 : 0);
    }   

    $('.openmodal').on('click',function(){
        setModalContent($( this ).data('thumb'));
        $('#myModal').modal('show');//pop up modal
    });

    $('.modal').on('click','.prev-img',function(){ setModalContent($( this ).data('thumb'));});
    $('.modal').on('click','.next-img',function(){ setModalContent($( this ).data('thumb'));});

    });
}
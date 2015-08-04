$(document).ready(function() {

if (document.location.pathname.indexOf("cats") > -1) {
    loadPetImages('/js/cats.json','cats');
} 
else if (document.location.pathname.indexOf("dogs") > -1) {
    loadPetImages('/js/dogs.json','dogs');
} 
else {
    console.error('unable to load images');
}

});

function loadPetImages(url, petType) {
    $.getJSON(url, function(json) {
    var attributes = new Array();
    var imageGallery = $('.image-gallery');
    var imageGalleryThumbnail = $('.image-gallery .thumbnail');

    for (var i=0; i<json[petType].length; i++) {
        var pet = json[petType][i];
        var imgUrl = pet.image;
        var thumbnail = imageGalleryThumbnail.clone();
        thumbnail.removeClass('hidden-lg');
        thumbnail.removeClass('hidden-md');
        thumbnail.removeClass('hidden-sm');
        thumbnail.removeClass('hidden-xs');
        thumbnail.data('thumb',i);
        thumbnail.find('ul li').text(pet.name);
        thumbnail.find('img').attr('src', imgUrl);
        imageGallery.append(thumbnail);
        attributes.push({img: imgUrl, name: pet.name, age: pet.age, gender: pet.gender, breed: pet.breed, color: pet.color, behavior: pet.behavior, needs: pet.needs}); 
    }   
    
    function setModalContent($thumbNumber) {
        $('#myModal .modal-body img').last().attr('src',attributes[$thumbNumber].img);
        $('#myModal .name').html('<b>Name:</b> ' + attributes[$thumbNumber].name);
        $('#myModal .age').html('<b>Age:</b> ' + attributes[$thumbNumber].age);
        $('#myModal .gender').html('<b>Gender:</b> ' + attributes[$thumbNumber].gender);
        $('#myModal .breed').html('<b>Breed:</b> ' + attributes[$thumbNumber].breed);
        $('#myModal .color').html('<b>Color:</b> ' + attributes[$thumbNumber].color);
        $('#myModal .behavior').html('<b>Behaviors:</b> ' + attributes[$thumbNumber].behavior);
        if (attributes[$thumbNumber].needs.length != 0) {
            $('#myModal .needs').html('<b>Special Needs:</b> ' + attributes[$thumbNumber].needs).removeClass('hidden-lg');
        } 
        else {
            $('#myModal .needs').addClass('hidden');
        }
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



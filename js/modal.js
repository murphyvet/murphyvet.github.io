$(document).ready(function() {

if (document.location.pathname.indexOf("cats") > -1) {
    loadCatImages('/js/cats.json');
} 
else if (document.location.pathname.indexOf("dogs") > -1) {
    loadDogImages('/js/dogs.json');
} 
else {
    console.error('unable to load images')
}

});


function loadDogImages(url) {
    $.getJSON(url, function(json) {
    var attributes = new Array();
    var imageGallery = $('.image-gallery');
    var imageGalleryThumbnail = $('.image-gallery .thumbnail');
    for (var i=0; i<json.dogs.length; i++) {
        var dog = json.dogs[i];
        var imgUrl = 'http://placehold.it/200x200';
        var thumbnail = imageGalleryThumbnail.clone();
        thumbnail.removeClass('hidden-lg');
        thumbnail.removeClass('hidden-md');
        thumbnail.removeClass('hidden-sm');
        thumbnail.removeClass('hidden-xs');
        thumbnail.find('ul li').text(dog.name);
        thumbnail.find('img').attr('src', imgUrl);
        imageGallery.append(thumbnail);
        attributes.push({img: imgUrl, head:dog.name , name: dog.name, age: dog.age}); 
    }   
    
    function setModalContent($thumbNumber) {
        
        $('#myModal .tmb-gray h3').text(attributes[$thumbNumber].head);
        $('#myModal .tmb-gray h3 + p').text(attributes[$thumbNumber].name);
        $('#myModal .tmb-gray .name').text(attributes[$thumbNumber].age);
        $('#myModal .modal-body img').last().attr('src',attributes[$thumbNumber].img);

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
        var imgUrl = 'http://placehold.it/200x200';
        var thumbnail = imageGalleryThumbnail.clone();
        thumbnail.removeClass('hidden-lg');
        thumbnail.removeClass('hidden-md');
        thumbnail.removeClass('hidden-sm');
        thumbnail.removeClass('hidden-xs');
        thumbnail.find('ul li').text(cat.name);
        thumbnail.find('img').attr('src', imgUrl);
        imageGallery.append(thumbnail);
        attributes.push({img: imgUrl, head:cat.name , name: cat.name, age: cat.age}); 
    }   
    
    function setModalContent($thumbNumber) {
        
        $('#myModal .tmb-gray h3').text(attributes[$thumbNumber].head);
        $('#myModal .tmb-gray h3 + p').text(attributes[$thumbNumber].name);
        $('#myModal .tmb-gray .name').text(attributes[$thumbNumber].age);
        $('#myModal .modal-body img').last().attr('src',attributes[$thumbNumber].img);

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
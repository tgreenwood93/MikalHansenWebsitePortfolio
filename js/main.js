$(document).ready(function() {

  $(".icon").click(function(){
   $('.icon').toggleClass("actived")
   $('.nav').toggleClass("actived")
   $('body').toggleClass("actived")
  })

  $(function() {
     $('#digitalart4').click();
  });

  $("#digitalart4").hide();

  baguetteBox.run('.baguetteBoxT', {
      fadein: true
  });
  baguetteBox.run('.baguetteBoxP', {
      fadein: true
  });

  baguetteBox.run('.baguetteBoxDA', {
      fadein: true
  });
  // filter functions
 var filterFns = {};

 // store filter for each group
 var filters = {};

 // init Isotope
 var $grid = $('.grid').isotope({
   itemSelector: '.PortImgMaster',
   // gutter: 10,
   masonry: {
   columnWidth: 320,
   fitWidth: true
 },
 filter: function() {
   var isMatched = true;
   var $this = $(this);

   for ( var prop in filters ) {
     var filter = filters[ prop ];
     // use function if it matches
     filter = filterFns[ filter ] || filter;
     // test each filter
     if ( filter ) {
       isMatched = isMatched && $(this).is( filter );
     }
     // break if not matched
     if ( !isMatched ) {
       return isMatched = isMatched && $(this).is( Tattoos );

     }
   }
   return isMatched;
 }

 });



 $('#ButtonSelect').on( 'click', '.button10', function() {
   var $this = $(this);
   // get group key
   var $buttonGroup = $this.parents('.button-group');
   var filterGroup = $buttonGroup.attr('data-filter-group');
   // set filter for group
   filters[ filterGroup ] = $this.attr('data-filter');
   // arrange, and use filter fn
   $grid.isotope();
 });

 var scroll_pos = 0;
 var animation_begin_pos = 10; //where you want the animation to begin
 var animation_end_pos = 400; //where you want the animation to stop
 var beginning_color = new $.Color( 'rgb(104,255,208)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
 var ending_color = new $.Color( 'rgb(58,129,142)' ); ;//what color we want to use in the end
 $(document).scroll(function() {
     scroll_pos = $(this).scrollTop();
     if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) {
        // console.log( 'scrolling and animating' );
         //we want to calculate the relevant transitional rgb value
         var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
         var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
         var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
         var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
         var newColor = new $.Color( newRed, newGreen, newBlue );
         //console.log( newColor.red(), newColor.green(), newColor.blue() );
         $('.fff').animate({ color: newColor }, 0);
     } else if ( scroll_pos > animation_end_pos ) {
          $('.fff').animate({ color: ending_color }, 0);
     } else if ( scroll_pos < animation_begin_pos ) {
          $('.fff').animate({ color: beginning_color }, 0);
     } else { }
 });

    window.sr = ScrollReveal();
    sr.reveal('.statement',  {duration: 2000, opacity: 0},50);
    sr.reveal('.tagline', {duration: 2000, opacity: 0},50);

  if ($(window).width() > 991) {
  $("#porfolioText").show();
  $("#firstImageA").show();
  $("#firstImageB").hide();
}
else {
  $("#firstImageA").hide();
  $("#firstImageB").show();
  $("#porfolioText").hide();

}

$("#DigitalArtSection").hide();
$("#PaintingSection").hide();
$("#TattooSection").hide();
$("div.baguetteBoxP").hide();
$("div.baguetteBoxDA").hide();
$("div.baguetteBoxT").hide();


    $("#tattoos").click(function(){
        $("#DigitalArtSection").hide();
        $("#PaintingSection").hide();
        $("#TattooSection").show();
        $("div.baguetteBoxP").hide();
        $("div.baguetteBoxDA").hide();
        $("div.baguetteBoxT").show();
    });

    $("#paitings").click(function(){
        $("#DigitalArtSection").hide();
        $("#PaintingSection").show();
        $("#TattooSection").hide();
        $("div.baguetteBoxP").show();
        $("div.baguetteBoxDA").hide();
        $("div.baguetteBoxT").hide();
    });

    $("#digitalart").click(function(){
        $("#DigitalArtSection").show();
        $("#PaintingSection").hide();
        $("#TattooSection").hide();
        $("div.baguetteBoxP").hide();
        $("div.baguetteBoxDA").show();
        $("div.baguetteBoxT").hide();
    });

//
$('a.scrollTo').on('click', function(){

  // data-scrollTo = section scrolling to name
  var scrollTo = $(this).attr('data-scrollTo');


  // toggle active class on and off. added 1/24/17
  $( "a.scrollTo" ).each(function() {
    if(scrollTo == $(this).attr('data-scrollTo')){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });


  // animate and scroll to the sectin
  $('body, html').animate({

    // the magic - scroll to section
    "scrollTop": $('#'+scrollTo).offset().top
  }, 1000 );
  $(function() {
     $('.Hamburger').click();
  });
  return false;

})

if ($(window).width() < 1024) {
  $(".mobileNav").show();
  $(".desktopNav").hide();
  $(".icon").show();
}
else {
  $(".mobileNav").hide();
  $(".desktopNav").show();
  $(".icon").hide();
}

$( window ).resize(function() {
if ($(window).width() < 1024) {
  $(".mobileNav").show();
  $(".desktopNav").hide();
  $(".icon").show();
}
else {
  $(".mobileNav").hide();
  $(".desktopNav").show();
  $(".icon").hide();
}
});


      mapboxgl.accessToken = 'pk.eyJ1IjoidGdyZWVud29vZCIsImEiOiJjamNpdDQ2czAzdHZyMzJsbHQwY2ExeXFjIn0.ucYyaH7-MjtKq-wbDHpDgg';
      var geojson = {
          "type": "FeatureCollection",
          "features": [
              {
                  "type": "Feature",
                  "properties": {
                      "message": "Momento Ink",
                      "iconSize": [60, 120]
                  },
                  "geometry": {
                      "type": "Point",
                      "coordinates": [
                         -123.018820,
                         44.046096
                      ]
                  }
              }
          ]
      };

      var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/light-v9',
          center: [  -123.018820,
                     44.046096],
          zoom: 13
      });

      // add markers to map
      geojson.features.forEach(function(marker) {
          // create a DOM element for the marker
          var el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundImage = 'url(Pin.png)';
          el.style.width = marker.properties.iconSize[0] + 'px';
          el.style.height = marker.properties.iconSize[1] + 'px';

          // el.addEventListener('click', function() {
          //     window.alert(marker.properties.message);
          // });

          // add marker to map
          new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .addTo(map);
      });
});

// Burger Menu 

// Hide our Navigation 

$("#nav").addClass("js");

// Add click listener to Burger menu + Toggle visability of the nav.

$(".menu-box").click(function(){
	$("#nav").toggle();
});

// Instagram plugin 


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1949861458',
        accessToken: '1949861458.1677ed0.971d04a46e4b48679cdf84534534f289'
    });
    userFeed.run();




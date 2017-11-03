  var owl = $(".slider");
 
  owl.owlCarousel({
      autoPlay : 5000,
      paginationSpeed : 300,
      goToFirstSpeed : 2000,
      items : 1, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      addClassActive: true,
      transitionStyle : "fadeUp",
      pagination:true,
      navigation:true,
      navigationText: ["<i class='icon-Arrow-Back'></i>","<i class='icon-Arrow-Next'></i>"]

  });


  var owl2 = $(".timeline");
 
  owl2.owlCarousel({

      paginationSpeed : 300,
      goToFirstSpeed : 2000,
      items : 6, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      addClassActive: true,

      pagination:false,
      navigation:true,
      autoWidth:true,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']


  });

 var owl3 = $(".scroll-wrap");
 
  owl3.owlCarousel({

      paginationSpeed : 300,
      goToFirstSpeed : 2000,
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      addClassActive: true,

      pagination:true,
      navigation:false,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']


  });







var saat = $(".timeline").data("saat");
var saattek = saat.split(":");

$(".tablo-satir").find("span").each(function(index){

  var arr = $(this).text();
  if(arr >= saat ) {
    $(this).parent().parent().addClass("future");

  
  }else {
    $(this).addClass("past");

  }

})


var mevcut = $(".future:first").find("span").text();
var onceki = $(".future:first").prev().find("span").text();
var saatfonk = onceki.split(":");

if (saatfonk[0] <= saattek[0] ) {
  $(".future:first").prev().find("span").parent().addClass("yayinda");
  var sirabas = $(".future:first").prev().find("span").parent().data("attr");

}else {
  $(".future:first").find("span").addClass("yayinda");
}


$(".owl-item").find("yayinda").parent().addClass("deneme5");


owl2.trigger('owl.jumpTo', sirabas - 2);


var menuheight = $(".logo").height();

$(".acikmenu").css("margin-top",menuheight+35);



$(".alt-menu").each(function(){
$(this).find("ul").length;

if($(this).find("ul").length === 0) {
    $(this).parent().parent().parent().remove();
}

    
  
})




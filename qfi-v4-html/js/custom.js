// loader function start 
var preloader = $('#preloader');
  $(window).load(function(){
    preloader.addClass('loading').fadeOut('slow', function() { $(this).remove(); });    
  });

  // header scroll 
  $(window).scroll(function(){
    if ($(this).scrollTop() > 30) {
      $('.header-blk').addClass('sticky');
    } else {
      $('.header-blk').removeClass('sticky');
    }
  });

  // notification sidebar

 $('.notification-btn').on('click',function() {
  $('.notification-sidepanel').addClass('active');
  $('.backdrop-ui').addClass('active');
  $('body').addClass('overflow');
});

$('.notification-header .close').on('click',function() {
  $('.notification-sidepanel').removeClass('active');
  $('.backdrop-ui').removeClass('active');
  $('body').removeClass('overflow');
});
$('.backdrop-ui').click(function(e)
  {
    $('.notification-sidepanel').removeClass("active");
    $('.backdrop-ui').removeClass("active");
    $('body').removeClass('overflow');
  })
  
 
$('[data-toggle="tooltip"]').tooltip({
  //trigger: 'click',
  placement: 'left'
});


//bootstrap dropdown animation function start
$(document).ready(function() {
  $('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
  });
  
  $('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250);
  });
  });
  //bootstrap dropdown animation function End
  
// loader function End 


  $( function() {

      $( ".accordian-sortable" ).sortable({ handle: '.page-sort .icon-drag' });
      $( ".question-sortable" ).sortable({ handle: '.question-sort .icon-drag' });
  } );
// modal function  start 

//sidebar 
  $('.sidemenu').click(function() {
    $( ".nl-blk" ).toggleClass("active");
    $(".overflow-blk").toggleClass("active");
    $(".sidemenu").toggleClass("active");
});

$('.overflow-blk').click(function() {
  $( ".nl-blk" ).removeClass("active");
  $(".overflow-blk").removeClass("active");
  $(".sidemenu").removeClass("active");
});
$('#sidebarCollapse').on('click', function () {
  $('#sidebar').toggleClass('active');
});

// checkbox grid ui function 
$('input:checkbox').change(function(){
  if($(this).is(":checked")) {
      $(this).closest(".grid-card").addClass("active");
  } else {
    $(this).closest(".grid-card").removeClass("active");
  }
});



// text editor 
tinymce.init({
  selector: '#editor',
  height: 121,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount'
  ],
  toolbar: 'undo redo | formatselect | ' +
  'bold italic backcolor | alignleft aligncenter ' +
  'alignright alignjustify | bullist numlist outdent indent | ' ,
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
});


// main tabs 
  $('.nl-blk li a').on('click', function(){
    $('.nl-blk li a.active').removeClass('active');
    $(this).addClass('active');
});

// tab panel
$('.tab-panel li a').on('click', function(){
  $('.tab-panel li a.active').removeClass('active');
  $(this).addClass('active');
});

//question inner tabs 



$('.surveybtn').click(function() {
  $( ".survey-template-tab" ).addClass("active");
  $(".growth-template-tab").removeClass("active");
});

$('.growthbtn').click(function() {
  $( ".survey-template-tab" ).removeClass("active");
  $(".growth-template-tab").addClass("active");
});



//logc tab fnction 

$('.add-condition-btn').click(function() {
  $(this).closest('.logic-content-wrapper').find(".append-blk").addClass("active");
});


$('.closebtn').click(function() {
  $(this).closest('.logic-content-wrapper').find(".append-blk").removeClass("active");
});


$('.add-subblock-btn').click(function() {
  $(this).closest('.logic-content-wrapper').find(".append-blk").addClass("active");
});


$('.closebtn').click(function() {
  $(this).closest('.logic-content-wrapper').find(".append-blk").removeClass("active");
});




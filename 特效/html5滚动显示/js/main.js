var os;

$(document).ready(function(){
	/*--------------------

	Tooltip customization

	--------------------*/

	$('.mainContent .tooltip').tooltipster({
      contentAsHTML: true,
      interactive: true,
      maxWidth: 300
  });

  $('nav .tooltip').tooltipster({
      contentAsHTML: true,
      interactive: true,
      position: 'right'
  });

  $('.mainContent .tooltip').mouseenter( function() {
      var val = $(this).data("action");
      

      if(val == 'Windows-3') {
      	$('.bsod').css("opacity", "1");
      }

      if(val == 'Windows-95') {
      	$('#Windows-95').addClass('comic-sans-ohgod');
      }

  });

  $('.mainContent .tooltip').mouseleave( function() {

      var val = $(this).data("action");

      if(val == 'Windows-95') {
      	//$('#Block4').removeClass('comic-sans-ohgod')
      	console.log("Dis block is: " + val);
      }
  });

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

  /*--------------------

  Browser Detection

  --------------------*/

  var unknown = '-';

  //browser
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browser = navigator.appName;
  var version = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;

  // screen
  var screenSize;
  if (screen.width) {
      width = window.innerWidth;
      height = window.innerHeight;
      screenSize = height;
  }

  // Firefox hates z-index = -1   ,,/,,
  if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
      $('.content-versions .content-computer .content-screen').css("z-index", "0");
      
  }


  // mobile version
  var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

  // system
  os = unknown;
  var clientStrings = [
      {s:'Windows win-10', r:/(Windows 10.0|Windows NT 10.0)/},
      {s:'Windows win-8', r:/(Windows 8.1|Windows NT 6.3)/},
      {s:'Windows win-8', r:/(Windows 8|Windows NT 6.2)/},
      {s:'Windows win-7', r:/(Windows 7|Windows NT 6.1)/},
      {s:'Windows win-vista', r:/Windows NT 6.0/},
      {s:'Windows Server 2003', r:/Windows NT 5.2/},
      {s:'Windows win-XP', r:/(Windows NT 5.1|Windows XP)/},
      {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
      {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
      {s:'Windows win-98', r:/(Windows 98|Win98)/},
      {s:'Windows win-95', r:/(Windows 95|Win95|Windows_95)/},
      {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
      {s:'Windows CE', r:/Windows CE/},
      {s:'Windows 3.11', r:/Win16/},
      {s:'Android', r:/Android/},
      {s:'Open BSD', r:/OpenBSD/},
      {s:'Sun OS', r:/SunOS/},
      {s:'Linux', r:/(Linux|X11)/},
      {s:'iOS', r:/(iPhone|iPad|iPod)/},
      {s:'Mac OS X', r:/Mac OS X/},
      {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
      {s:'QNX', r:/QNX/},
      {s:'UNIX', r:/UNIX/},
      {s:'BeOS', r:/BeOS/},
      {s:'OS/2', r:/OS\/2/},
      {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
  ];
  for (var id in clientStrings) {
      var cs = clientStrings[id];
      if (cs.r.test(nAgt)) {
          os = cs.s; 
          break;
      }
  }

  var osVersion = unknown;

  if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = 'Windows';
      $('.' + osVersion).css("display", "block");
  }

  switch (os) {
      case 'Mac OS X':
          osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
          $('.osx').css("display", "block");
          break;

      case 'Android':
          osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
          $('.sidebar').css("display", "none");
          $('.content-floppy').css("display", "none");
          $('.row').css("display", "none");
          $('html').css("overflow", "scroll");
          $('.inner-wrap').css("height", "100%");
          break;

      case 'iOS':
          osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
          osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
          $('.sidebar').css("display", "none");
          $('.content-floppy').css("display", "none");
          $('.row').css("display", "none");
          $('body').css("overflow", "scroll");
          $('html').css("overflow", "scroll");
          $('.inner-wrap').css("height", "100%");
          break;
  }

  console.log("You're browsing from " +  os + " " + osVersion + " yeah");
  console.log("Your browser seems to be " +  screenSize);

  setInterval(function () {
    checkScreen();
  }, 100);
  


  /*-------------------
  
    IE smooth scroll is a dick

  --------------------*/


  if(navigator.userAgent.match(/Trident\/7\./)) {
     $('body').on("mousewheel", function () {
         event.returnValue = false;
         var wd = event.wheelDelta;
         var csp = window.pageYOffset;
         window.scrollTo(0, csp - wd);
     });
  } 

  /*--------------------
  SlideToggle for SchoolFinder
  --------------------*/

  $("#finder_btn").click(function(){
    $("#toggle_finder").slideToggle();
  });


  // Handler to detect pressing of OTH Perks button
  jQuery(".email-form form input[type='submit']").click(function(e){
    console.log("Click1");
    // If cross-domain AJAX may be performed without an error, do so
    if (jQuery.support.cors){
      console.log("Click2");
      e.preventDefault();
      if(validateEmail("#mobile-overlay .email-form #EmailElement_0_input")) {
        console.log("Click3");

        asyncSubmit(".email-form form");
        jQuery(".email-form").slideUp(300);
        jQuery(".signed-up").slideDown(300);
          
      }
      else
      {
        jQuery(".bad-email").slideDown(300);
      }
    }
  });


	/*--------------------

	jQuery Waypoint analytics

	--------------------*/

	// Determining the second last and last blocks
	var lastblock = $(".mainContent").eq(-1).attr('data-block');
	var secondlblock = $(".mainContent").eq(-2).attr('data-block');
	
	// Create Array for unique 
	var i = new Array;
	$('[data-block]').each(function(){ un = $(this).attr('data-block'); i[un]  = 0; });
			
	// Track blocks that come into the view port
	$('[data-block]').waypoint(function(direction) 
	{
		if(direction === 'down') 
		{
			un = $(this).attr('data-block');
			if(i[un] === 0){ 
				scrollAnalytics('Unique', $(this).attr('data-block'), direction); } // UNIQUE VIEWS
			i[un] += 1;
			
			scrollAnalytics('Total', $(this).attr('data-block'), direction); // TOTAL VIEWS
		}
	},{
		offset: function() { return -$(this).height(); }  // Only fires the waypoint at the BOTTOM of the content section 
    })
    .waypoint(function(direction) 
    {
		if(direction === 'up')
		{
			scrollAnalytics('Total', $(this).attr('data-block'), direction); // TOTAL VIEWS.
		}
		// THIS IS A SPECIAL CASE TO TRACK THE SECOND TO LAST BLOCK, AS THE BOTTOM CANNOT HIT TOP OF VIEWPORT
		if(direction === 'down' && $(this).attr('data-block') === secondlblock) 
		{
			un = $(this).attr('data-block');
			if(i[un] === 0){  scrollAnalytics('Unique', $(this).attr('data-block'), direction); } // UNIQUE VIEWS
			i[un]  += 1;
			
			scrollAnalytics('Total', $(this).attr('data-block'), direction); // TOTAL VIEWS
		}

	})
	///////// THIS IS A SPECIAL CASE TO TRACK THE LAST BLOCK, AS THE TOP CANNOT HIT TOP OF VIEWPORT///////
	.waypoint(function(direction) 
	{
		if(direction === 'down' && $(this).attr('data-block') === lastblock) 
		{
			un = $(this).attr('data-block');
			if(i[un] === 0){ scrollAnalytics('Unique', $(this).attr('data-block'), direction);}  // UNIQUE VIEWS
			i[un]  += 1;
			
			scrollAnalytics('Total', $(this).attr('data-block'), direction);  // TOTAL VIEWS
		}
	},{
		offset: 340 // Fires the waypoint 200px above of the content section 
	});
	
	// End
	function scrollAnalytics (type, content, direction) {
		/* NEW Analytics command */
		
		//ga('send', 'event', gaEvent, gaEvent + ' - Content seen (' + type + ')', gaEvent + ' - Content seen - ' + content);
		//console.log( gaEvent + ', ' + gaEvent + ' - Content seen (' + type + ') , ' + gaEvent + ' - Content seen - ' + content);
	}

});

$( window ).resize(function() {
  checkScreen();
});


// Check's screen width
function checkScreen(){
  $('.content-computer.bump-it.skrollable-before').css("margin-bottom", "0px");
  $('.content-computer.bump-it.skrollable-after').css("margin-bottom", "0px");
  // screen
  var screenSize;
  if (screen.width) {
      width = window.innerWidth;
      height = window.innerHeight;
      screenSize = height;
  }

  console.log("Your browser seems to be " +  screenSize);
  

  if ( screenSize < 800 && os != 'iOS' && os != 'Android'){
    $('.mainContent').css("zoom", "0.9");
    $('.content-versions .tooltip').css("zoom", "1.1");
  } 

  if ( screenSize < 900 && os != 'iOS' && os != 'Android'){
    $('.mainContent.content-intro').css("zoom", "0.85");
  } 

  if ( screenSize <= 700 && os != 'iOS' && os != 'Android'){
    $('.mainContent').css("zoom", "0.75");
    $('.content-versions .tooltip').css("zoom", "1.2");
  } 

  if ( screenSize <= 600 && os != 'iOS' && os != 'Android'){
    $('.mainContent').css("zoom", "0.65");
    $('.content-versions .tooltip').css("zoom", "1.3");
  } 

  if ( screenSize >= 800 && os != 'iOS' && os != 'Android'){
    $('.mainContent').css("zoom", "1.0");
    $('.content-versions .tooltip').css("zoom", "1.0");
  } 



}

// Asynchronously posts form data
function asyncSubmit(selector){
  var formTarget = jQuery(selector).attr("action");

  jQuery.post(formTarget, jQuery(selector).serialize());
}

// Validates email
function validateEmail(selector){
  var email = jQuery(selector).val();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

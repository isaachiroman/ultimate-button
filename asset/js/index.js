jQuery(document).ready(function($){
  var counter = 0;
  //Start show hide contact button
  $(".mbwph-contact-button").click(function() {
    $(".mbwph-contact-container").toggleClass("isButtonShow");
    $(".mbwph-close-button-icon").toggleClass("isShowCloseButton");
    $(".mbwph-button-group-icon").toggleClass("isHideGroupIcon");
  });
  $(".mbwph-header-close").click(function() {
    $(".mbwph-contact-container").removeClass("isButtonShow");
    $(".mbwph-close-button-icon").removeClass("isShowCloseButton");
    $(".mbwph-button-group-icon").removeClass("isHideGroupIcon");
  });
  $(".mbwph-contact-close-greeting").click(function() {
    $(".mbwph-contact-greeting").addClass("isHideGreeting");
  });
  $(".mbwph-call-main").click(function() {
    $(".mbwph-call-list").toggleClass("isShowCallList");
    $(".mbwph-call-button-icon-child").toggleClass("isHideElement");
    $(".mbwph-close-call-button-icon").toggleClass("isShowCloseButton");
  });
  $(function() {
    $(".mbwph-contact-tawkto").click(function() {
      if ($("iframe").contents().find("body").contents().length > 0) {
          $(".mbwph-contact-container").removeClass("isButtonShow");
          $(".mbwph-main-contact").addClass("isHideMWPContact");
          $(".mbwph-contact-greeting").addClass("isHideGreeting");
        }
    });
    $(".mbwph-contact-messenger").click(function(event) {
      event.preventDefault();
      $(".mbwph-fbc").addClass("isFbcShow");
      // FB.CustomerChat.showDialog();
      FB.Event.subscribe('customerchat.dialogShow', showFBCPopup());
      $(".mbwph-contact-container").removeClass("isButtonShow");
    });
    var isOpen = true;
    function showFBCPopup() {
      FB.CustomerChat.showDialog();
      $(".mbwph-main-contact").addClass("isHideElement");
      $(".mbwph-call-main").addClass("isHideElement");
      localStorage.setItem('MBWPH_FBC', isOpen);
      isOpen = true;
      console.log("retrievedObject: ", JSON.parse(fbcStatus));
    }
    var fbcStatus = localStorage.getItem('__fb_chat_plugin');
    console.log(JSON.parse(fbcStatus)['visibility']);
    // if (isOpen == false) {
    //   $(".mbwph-call-main").removeClass("isHideElement");
    // }

  });
  //Hide button when click anywhere
  $(document).mouseup(function(e) {
    var socialBtn = $(".mbwph-social");
    var callBtn = $(".mbwph-btn-call");
    if (!socialBtn.is(e.target) && socialBtn.has(e.target).length === 0) {
      $(".mbwph-contact-container").removeClass("isButtonShow");
      $(".mbwph-button-group-icon").removeClass("isHideGroupIcon");
      $(".mbwph-close-button-icon").removeClass("isShowCloseButton");
    }
    if (!callBtn.is(e.target) && callBtn.has(e.target).length === 0) {
      $(".mbwph-call-list").removeClass("isShowCallList");
      $(".mbwph-close-call-button-icon").removeClass("isShowCloseButton");
      $(".mbwph-call-button-icon-child").removeClass("isHideElement");
    }
  });
  //End show hide contact button

  //Start list button icon
  toggleRedClass();
  function toggleRedClass() {
    var icons = $('.mbwph-button-icon');
    var iconsLength = icons.length;
    if (counter == iconsLength) {
      counter = 0;
    }
    $.each(icons, function(index, value) {
      $(value).removeClass('mbwph-button-icon-animation');
      if (index == counter) {
        $(value).addClass('mbwph-button-icon-animation');
      }
    });
    counter++;
    setTimeout(function() {
      toggleRedClass();
    }, 2000);
  }
  //End list button icon

  //Start show hide scrollToTop
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) $('.mbwph-btt').addClass('show');
    else $('.mbwph-btt').removeClass('show');
  });
    $(".mbwph-btt").click(function () {
    $("html, body").animate({scrollTop: 0, behavior:'smooth'}, 800);
      event.preventDefault();
  });
  //End show hide scrollToTop
  
  });
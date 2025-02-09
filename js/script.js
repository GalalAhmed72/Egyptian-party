// open nav
$(".open-nav").click(function () {
  $(".nav").animate({ width: "250px" }, 500);
  $(".cartona").animate({ marginLeft: "250px" }, 500);
});
// close nave
$(".exit-icon").click(function () {
  $(".nav").animate({ width: "0px" }, 500);
  $(".cartona").animate({ marginLeft: "0px" }, 500);
});

/*scrollmenu*/
$(".nav .data .listData .ancor").click(function () {
  $("html, body").css({
    "scroll-behavior": "auto"
});
  let sectionId = $(this).attr('href');
  let positionOfSection = $(sectionId).offset().top;
  console.log(sectionId,positionOfSection);
  $("html,body").animate({scrollTop:positionOfSection},1500);
  
});


//Accordion

$("#sliderDown .toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});
// counter
window.onload = function () {
  countDownToTime("2 February 2026 24:00:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}
/*textarea*/
var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
              $("#chars").text("your available character finished");

            }
        else{

        $("#chars").text(AmountLeft);
        }
});

// =====================================================


var timeout1 = setTimeout(threeSeconds, 1000 * 3);
var timeout2 = setTimeout(twoSeconds, 1000 * 5);

// clearTimeout(timeout1);
// clearTimeout(timeout2);

function threeSeconds() {
    $(".choice1").velocity('transition.bounceRightIn');
}

function twoSeconds(){
    $(".choise2").velocity('transition.bounceRightIn');
}


for(i=0;i<1;i++){
  $('.test')
    // .velocity('transition.fadeIn')
    // .velocity('transition.fadeOut')
    // .velocity('transition.flipXIn')
    // .velocity('transition.flipXOut')
    // .velocity('transition.flipYIn')
    // .velocity('transition.flipYOut')
    // .velocity('transition.flipBounceXIn')
    // .velocity('transition.flipBounceXOut')
    // .velocity('transition.flipBounceYIn')
    // .velocity('transition.flipBounceYOut')
    // .velocity('transition.swoopIn')
    // .velocity('transition.swoopOut')
    // .velocity('transition.whirlIn')
    // .velocity('transition.whirlOut')
    // .velocity('transition.shrinkIn')
    // .velocity('transition.shrinkOut')
    .velocity('transition.expandIn')
    // .velocity('transition.expandOut')
    // .velocity('transition.bounceIn')
    // .velocity('transition.bounceOut')
    // .velocity('transition.bounceUpIn')
    // .velocity('transition.bounceUpOut')
    // .velocity('transition.bounceDownIn')
    // .velocity('transition.bounceDownOut')
    // .velocity('transition.bounceLeftIn')
    // .velocity('transition.bounceLeftOut')
    // .velocity('transition.bounceRightIn');
    // .velocity('transition.bounceRightOut')
    // .velocity('transition.slideUpIn')
    // .velocity('transition.slideUpOut')
    // .velocity('transition.slideDownIn')
    // .velocity('transition.slideDownOut')
    // .velocity('transition.slideLeftIn')
    // .velocity('transition.slideLeftOut')
    // .velocity('transition.slideRightIn')
    // .velocity('transition.slideRightOut')
    // .velocity('transition.slideUpBigIn')
    // .velocity('transition.slideUpBigOut')
    // .velocity('transition.slideDownBigIn')
    // .velocity('transition.slideDownBigOut')
    // .velocity('transition.slideLeftBigIn')
    // .velocity('transition.slideLeftBigOut')
    // .velocity('transition.slideRightBigIn')
    // .velocity('transition.slideRightBigOut')
    // .velocity('transition.perspectiveUpIn')
    // .velocity('transition.perspectiveUpOut')
    // .velocity('transition.perspectiveDownIn')
    // .velocity('transition.perspectiveDownOut')
    // .velocity('transition.perspectiveLeftIn')
    // .velocity('transition.perspectiveLeftOut')
    // .velocity('transition.perspectiveRightIn')
    // .velocity('transition.perspectiveRightOut'); 
}
// $(".choice").velocity('transition.bounceRightIn');
console.log("it works")
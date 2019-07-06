// UI Components (Nav Icons)
.addEventListener("click",function(){
    API_request();
});


// UI Landing Page (Carousel)

landingslide1.addEventListener("click",function(){
    navigation("1 / 3");
landingslide2.addEventListener("click",function(){
    navigation("2 / 3");
landingslide3.addEventListener("click",function(){
    navigation("3 / 3");


// UI Component (Pagination Buttons)
arrowleft.addEventListener("click",function(){
    navigation("«");
});
arrow1.addEventListener("click",function(){
    navigation("1");
});
arrow2.addEventListener("click",function(){
    navigation("2");
});
arrow3.addEventListener("click",function(){
    navigation("3");
});
arrowright.addEventListener("click",function(){
    navigation("»");


/* jQuery Example Event Listener - Similar to plain Javascript example above
$("#input_ico_locate").on('click',function(){
  API_request();  
})
*/
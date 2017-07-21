$(document).ready(function(){

  $("#happyButton").click(function() {
    $("body").css('background-color', 'yellow');
    });
     $("#sadButtons").click(function() {
      $("body").css('background-color', blue());
      });
 
      $("#green").click(function(){
        $("h1").css('color', green());
      });

      $("#blue").click(function(){
        $("h1").css('color', blue());
      });

      $("#red").click(function(){
        $("h1").css('color', red());
      });

      $("#puppy").hovers(function(){
        updateImage ();
      });

      $("#puppy").off("hovers"(){
      });

      $(".change").doubleclick(function(){
        $("change").html('text', changeText());
      });

      $("document").scrolls(function(){
        $("footer").css('image', NewImg());
      });*/

});

/* CHALLENGE #1:
    - when a user clicks on the happy button, make the background of the page yellow
    - when a user clicks on the sad button, make the background of the page blue */



/* CHALLENGE #2:
    - when a user clicks on any of the circles, change the h1 text and the border of the image to the color of the circle*/



/* CHALLENGE #3:
    - when a user hovers on the dog image, change it to an image of your dog.
    - when a user is no longer hovering, change it back to tonks   */



/* CHALLENGE #4:
    - when a user double clicks on CHANGE ME, change the text to "I changed"!*/



/* CHALLENGE #5:
    - when a user scrolls, add a new image of a dog of your choice to the bottom of the page.*/

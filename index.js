// $('h1').css("color", "red");

$('h1').addClass("big-title margin-10")

//button javascript

$('button').addClass("margin-10")

//manipute text 

$('button').html("<em>Hey</em>")
$('button').text("Hey via text method")

// manipulate attribute

//eventlistener
$('h1').click(function() {
    $('h1').css("color", "purple");
})
  // $("h1").click(function() {
    // alert("This is a header.");
  // });

  // $("p").click(function() {
    // alert("This is a paragraph.");
  // });

  // $("img").click(function() {
    // alert("This is an image.");
  // });

// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $("#walrus-showing").toggle();
//     $("#walrus-hidden").toggle();
//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault()
    const person1 = $("input#person1").val();
    const person2 = $("input#person2").val();
    const animal= $("input#animal").val();
    const exclamation = $("input#exclamation").val();
    const verb = $("input#verb").val();
    const noun = $("input#noun").val();

    const formInputs = []
    formInputs.push(person1, person2, animal, verb, noun)
    formInputs.forEach(function(elements){

    })

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();
  });
});


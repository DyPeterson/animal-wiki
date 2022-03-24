$(document).ready(function()  {
  $("#animalChoice").submit(function() {
    event.preventDefault();
    let choice = $("#favAnimal").val();
    console.log(choice)
    if (choice === "1") {
      $("#turtle").show();
    } else {
      $("#turtle").hide();
    }
    if (choice === "2") {
      $("#snake").show();
    } else {
      $("#snake").hide()
    }
    if (choice === "3") {
      $("#insects").show()
    } else
      $("#insects").hide()
    })
  });
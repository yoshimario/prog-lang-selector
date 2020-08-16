$(document).ready(function() {
  $("#surveyInfo").submit(function() {
    event.preventDefault();
    const userName = parseInt($("#name").val());
    const responseOne = $("select#questionOne").val();
    const responseTwo = $("select#questionTwo").val();
    const responseThree = $("select#questionThree").val();
    const responseFour = $("select#questionFour").val();
    const responseFive = $("select#questionOne").val();

  });
});
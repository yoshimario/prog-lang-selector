$(document).ready(function() {
  $("#surveyInfo").submit(function() {
    event.preventDefault();
    // Define variable tallies for responses.
    let dreamAmount = 0;
    let cobaltAmount= 0;
    let javaAmount = 0;
    let qbasicAmount = 0;
    let fortranAmount = 0;
    // Define response variables for question answers.
    const userName = parseInt($("#name").val());
    const responseOne = $("select#questionOne").val();
    const responseTwo = $("select#questionTwo").val();
    const responseThree = $("select#questionThree").val();
    const responseFour = $("select#questionFour").val();
    const responseFive = $("select#questionOne").val();

    //Defines functions to make a running tally.
    if (responseOne === "dream") {
      dreamAmount = add(dreamAmount, 1);
    } 
    else if (responseOne === "fortran") {
      fortranAmount = add(fortranAmount, 1);
    }
    else if (responseOne === "cobalt") {
      cobaltAmount = add(cobaltAmount, 1);
    }
    else if (responseOne === "qbasic") {
      cobaltAmount = add(cobaltAmount, 1);
    }
    else (responseOne === "java") {
      cobaltAmount = add(cobaltAmount, 1);
    }
    
  });
});
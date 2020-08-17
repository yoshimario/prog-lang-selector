function add(number1, number2){
  return number1 + number2;
}
$(document).ready(function() {
  $("form#surveyInfo").submit(function() {
    $('#dream, #cobalt, #qbasic, #fortran, #java, #programResult').hide();
    event.preventDefault();
    // Define variable tallies for responses.
    let dreamAmount = 0;
    let cobaltAmount= 0;
    let javaAmount = 0;
    let qbasicAmount = 0;
    let fortranAmount = 0;
    // Define response variables for question answers.
    const userName = $("input#personName").val();

    const responseOne = $("select#questionOne").val();
    const responseTwo = $("select#questionTwo").val();
    const responseThree = $("select#questionThree").val();
    const responseFour = $("select#questionFour").val();
    const responseFive = $("select#questionOne").val();
    $(".userResult").text(userName);

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
      qbasicAmount = add(qbasicAmount, 1);
    }
    else if (responseOne === "java") {
      javaAmount = add(javaAmount, 1);
    }
    
    if (responseTwo === "dream") {
      dreamAmount = add(dreamAmount, 1);
    } 
    else if ( responseTwo== "fortran") {
      fortranAmount = add(fortranAmount, 1);
    }
    else if (responseTwo === "cobalt") {
      cobaltAmount = add(cobaltAmount, 1);
    }
    else if (responseTwo === "qbasic") {
      qbasicAmount = add(qbasicAmount, 1);
    }
    else if(responseTwo === "java") {
      javaAmount = add(javaAmount, 1);
    }

    if (responseThree === "dream") {
      dreamAmount = add(dreamAmount, 1);
    } 
    else if ( responseThree== "fortran") {
      fortranAmount = add(fortranAmount, 1);
    }
    else if (responseThree === "cobalt") {
      cobaltAmount = add(cobaltAmount, 1);
    }
    else if (responseThree === "qbasic") {
      qbasicAmount = add(qbasicAmount, 1);
    }
    else if(responseThree === "java") {
      javaAmount = add(javaAmount, 1);
    }
    
    if (responseFour === "dream") {
      dreamAmount = add(dreamAmount, 1);
    } 
    else if ( responseFour== "fortran") {
      fortranAmount = add(fortranAmount, 1);
    }
    else if (responseFour === "cobalt") {
      cobaltAmount = add(cobaltAmount, 1);
    }
    else if (responseFour === "qbasic") {
      qbasicAmount = add(qbasicAmount, 1);
    }
    else if(responseFour === "java") {
      javaAmount = add(javaAmount, 1);
    }

    if (responseFive === "dream") {
      dreamAmount = add(dreamAmount, 1);
    } 
    else if ( responseFive== "fortran") {
      fortranAmount = add(fortranAmount, 1);
    }
    else if (responseFive === "cobalt") {
      cobaltAmount = add(cobaltAmount, 1);
    }
    else if (responseFive === "qbasic") {
      qbasicAmount = add(qbasicAmount, 1);
    }
    else if(responseFive === "java") {
      javaAmount = add(javaAmount, 1);
    }
// Returning a result based on response calculations
    if (dreamAmount >= 1) {
      $("#programResult").show();
      $("#programLang").text("Your programming language is Dream");
      $("#programInfoLang").text("You really must not be reading the responses");
    }
    else if (fortranAmount >=3) {
      $("#programResult").show();
      $("#programLang").text("Your programming language is Fortran!");
      $("#programInfoLang").text("You really living life inside a locked room!");
    }
    else if (cobaltAmount >=3) {
      $("#programResult").show();
      $("#programLang").text("Your programming language is Cobalt!");
      $("#programInfoLang").text("You really most enjoy torture!");
    }
    else if (qbasicAmount >=3) {
      $("#programResult").show();
      $("#programLang").text("Your programming language is Qbasic!");
      $("#programInfoLang").text("You are living in the past move on!");
    }
    else if (javaAmount >=3) {
      $("#programResult").show();
      $("#programLang").text("Your programming language is Qbasic!");
      $("#programInfoLang").text("You are living in the past move on!");
    }

  });
});
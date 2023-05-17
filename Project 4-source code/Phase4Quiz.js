//global variable
// create an empty array
const QuestionArray = [];


//=========================================================================================================================
// RETRIEVE THE DATA FROM THE JSON FILE AND STORE IT INTO AN ARRAY OF OBJECTS
fetch("Phase4QuizQuestion.json")
  .then(response => response.json())
  .then(data => {
// The purpose is to retrieve the objects from JSON object, then …
// add the objects in the JSON object into an array of objects 

//determine the number of object in the array / number of question
const LengthArray = data.questions.length
	
// Loop through the JSON object
for (let i = 0; i < LengthArray; i++){

    //Add a new element into the array
    QuestionArray.push (data.questions[i]);  

    // Test the output in console
    //console.log(QuestionArray[i]);
    //console.log("The " + i + " object = " + data.questions[i]);


}
    // call the display function
    displayQuiz();

  })
  .catch(error => console.log(error));



//=========================================================================================================================
//FUNCTION TO DISPLAY THE LIST OF QUIZ QUESTION
function displayQuiz() {
    // Test the output in console      
    //console.log(QuestionArray.length);

  for (let i = 0; i < QuestionArray.length; i++){
  
      let QuestionNumber = `#${i+1}`;
      let QuestionSentence= QuestionArray[i].question;
      let QuestionOption1= QuestionArray[i].choices[0];
      let QuestionOption2= QuestionArray[i].choices[1];
      let QuestionOption3= QuestionArray[i].choices[2];
      let QuestionOption4= QuestionArray[i].choices[3];
      let QuestionAnswer= QuestionArray[i].correctAnswer;

      //Test the output
      console.log(`The QuestionNumber is: ` + QuestionNumber);
      console.log(`The QuestionSetence is: ` + QuestionSentence);
      console.log(`The QuestionOption1 is: ` + QuestionOption1);
      console.log(`The QuestionOption2 is: ` + QuestionOption2);
      console.log(`The QuestionOption3 is: ` + QuestionOption3);
      console.log(`The QuestionOption4 is: ` + QuestionOption4);
      console.log(`The QuestionAnswer is: ` + QuestionAnswer); 

      //Display the question
      const quizDiv = document.getElementById("quiz");
  
      // create the “Question number” label and append it 
      const LabelQuestionNumber = document.createElement("label");
      LabelQuestionNumber.id = QuestionNumber;
      LabelQuestionNumber.textContent = `Question Number:` + QuestionNumber;
      quizDiv.appendChild(LabelQuestionNumber);
      quizDiv.appendChild(document.createElement("br")); // Add line break
  
      // create the “Question Sentence” label and append it
      const LabelQuestionSentence = document.createElement("label");
      LabelQuestionSentence.id = QuestionNumber;
      LabelQuestionSentence.textContent = QuestionSentence;
      quizDiv.appendChild(LabelQuestionSentence);
      quizDiv.appendChild(document.createElement("br")); // Add line break
  
      //create the radio button #1 and label and append it
      const RadioButton1 = document.createElement("input");
      RadioButton1.type = "radio";
      RadioButton1.id = QuestionNumber;
      RadioButton1.name = QuestionNumber;
      RadioButton1.value = QuestionOption1;
      RadioButton1.checked = "checked";
      quizDiv.appendChild(RadioButton1);
        
      const LabelQuestionRadio1 = document.createElement("label");
      LabelQuestionRadio1.id = QuestionNumber;
      LabelQuestionRadio1.textContent = QuestionOption2;
      quizDiv.appendChild(LabelQuestionRadio1);
      quizDiv.appendChild(document.createElement("br")); // Add line break
  
      //create the radio button #2 and label and append it
      const RadioButton2 = document.createElement("input");
      RadioButton2.type = "radio";
      RadioButton2.id = QuestionNumber;
      RadioButton2.name = QuestionNumber;
      RadioButton2.value = QuestionOption2;
      quizDiv.appendChild(RadioButton2);
  
      const LabelQuestionRadio2 = document.createElement("label");
      LabelQuestionRadio2.id = QuestionNumber;
      LabelQuestionRadio2.textContent = QuestionOption1;
      quizDiv.appendChild(LabelQuestionRadio2);
      quizDiv.appendChild(document.createElement("br")); // Add line break
  
      //create the radio button #3 and label and append it
      const RadioButton3 = document.createElement("input");
      RadioButton3.type = "radio";
      RadioButton3.id = QuestionNumber;
      RadioButton3.name = QuestionNumber;
      RadioButton3.value = QuestionOption3;
      quizDiv.appendChild(RadioButton3);
  
      const LabelQuestionRadio3 = document.createElement("label");
      LabelQuestionRadio3.id = QuestionNumber;
      LabelQuestionRadio3.textContent = QuestionOption3;
      quizDiv.appendChild(LabelQuestionRadio3);
      quizDiv.appendChild(document.createElement("br")); // Add line break
  
      //create the radio button #4 and label and append it
      const RadioButton4 = document.createElement("input");
      RadioButton4.type = "radio";
      RadioButton4.id = QuestionNumber;
      RadioButton4.name = QuestionNumber;
      RadioButton4.value = QuestionOption4;
      quizDiv.appendChild(RadioButton4);

      const LabelQuestionRadio4 = document.createElement("label");
      LabelQuestionRadio4.id = QuestionNumber;
      LabelQuestionRadio4.textContent = QuestionOption4;
      quizDiv.appendChild(LabelQuestionRadio4);
      quizDiv.appendChild(document.createElement("br")); // Add line break
      quizDiv.appendChild(document.createElement("br")); // Add line break
      quizDiv.appendChild(document.createElement("br")); // Add line break
      
  }
  }



//=========================================================================================================================
// FUNCTION TO EVALUATE THE QUIZ  
function evaluateQuiz() {
    //Set the initial value to NIL 
    score = 0;

    for (let i = 0; i < QuestionArray.length; i++){
    let QuestionNumber = `#${i+1}`;
    let QuestionAnswer= QuestionArray[i]. correctAnswer;

    var SelectedValue = document.querySelector(`input[name="` + QuestionNumber + `"]:checked`).value;
    
    //test the result: output to console
    console.log("Selected answer for question " + QuestionNumber + " is: " + SelectedValue);
    console.log("answer for question " + QuestionNumber + " is: " + QuestionAnswer);

    if (SelectedValue === QuestionAnswer) {score++}
    //test the result: output to console
    console.log(`The score is: ` + score);
    
    // Call the function to displa the score
    displayScore();

    }
}

//=========================================================================================================================
// FUNCTION TO DISPLAY THE score
function displayScore() {

  const scoreResult = document.getElementById("score");
  scoreResult.textContent = `You scored ${score} out of ${QuestionArray.length} question`;

}





//=========================================================================================================================
// FUNCTION TO DISPLAY THE ANSWER
function displayAnswer(){
  for (let i = 0; i < QuestionArray.length; i++){
  
    let QuestionNumber = `#${i+1}`;
    let QuestionSentence= QuestionArray[i].question;
    let QuestionAnswer= QuestionArray[i].correctAnswer;

    //Test the output
    console.log(`The QuestionNumber is: ` + QuestionNumber);
    console.log(`The QuestionSetence is: ` + QuestionSentence);
    console.log(`The QuestionAnswer is: ` + QuestionAnswer); 

    const quizDiv = document.getElementById("answer");
  
    // create the “Question number” label and append it 
    const LabelQuestionNumber = document.createElement("label");
    LabelQuestionNumber.textContent = `Question Number:` + QuestionNumber;
    quizDiv.appendChild(LabelQuestionNumber);
    quizDiv.appendChild(document.createElement("br")); // Add line break

    // create the “Question Sentence” label and append it
    const LabelQuestionSentence = document.createElement("label");
    LabelQuestionSentence.textContent = QuestionSentence;
    quizDiv.appendChild(LabelQuestionSentence);
    quizDiv.appendChild(document.createElement("br")); // Add line break

    // create the “Question Answer” label and append it
    const LabelQuestionAnswer = document.createElement("label");
    LabelQuestionAnswer.textContent = QuestionAnswer;
    quizDiv.appendChild(LabelQuestionAnswer);
    quizDiv.appendChild(document.createElement("br")); // Add line break


  }
}

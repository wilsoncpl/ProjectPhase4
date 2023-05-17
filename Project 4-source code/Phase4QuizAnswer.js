//global variable
// create an empty array
const QuestionArray = [];
score = 0;

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
    displayAnswer();

  })
  .catch(error => console.log(error));




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
    LabelQuestionSentence.textContent = `QUESTION : ` + QuestionSentence;
    quizDiv.appendChild(LabelQuestionSentence);
    quizDiv.appendChild(document.createElement("br")); // Add line break

    // create the “Question Answer” label and append it
    const LabelQuestionAnswer = document.createElement("label");
    LabelQuestionAnswer.textContent = `ANSWER : ` + QuestionAnswer;
    quizDiv.appendChild(LabelQuestionAnswer);
    quizDiv.appendChild(document.createElement("br")); // Add line break
    quizDiv.appendChild(document.createElement("br")); // Add line break
    quizDiv.appendChild(document.createElement("br")); // Add line break


  }
}

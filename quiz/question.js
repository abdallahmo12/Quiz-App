// import {Settings} from './settings.js'
class Question{
    constructor(question){
        this.questionField = document.querySelector("#question");
        this.answerElements = [
            document.querySelector('#a1'),
            document.querySelector('#a2'),
            document.querySelector('#a3'),
            document.querySelector('#a4')
        ];
        this.correctAnswer = question.correct_answer;
        this.question = question.question;
        this.isCorrect = false;

        this.allAnswers = [question.correct_answer , ...question.incorrect_answers]; 
    }
    answer(checkedElement){
        this.isCorrect = (checkedElement[0].textContent === this.correctAnswer) ? true :false;
    }
    render(){
        this.questionField.innerHTML = this.question;
        this.answerElements.forEach((element,index) => {
            element.innerHTML = "<input type='radio' name='radio'>"+ this.allAnswers[index];
        });
    }
}
export default Question;
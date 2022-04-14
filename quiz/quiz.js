import Question from "./question.js";
import Final from "./final.js";
class Quiz{
    constructor(quizElement,amount,questions)
    {
        this.quizElement = quizElement;
        this.finalElement = document.querySelector(".final");
        this.currentQuestion = document.querySelector("#current");
        this.totalElements = document.querySelector('#total');
        this.nextBtn = document.querySelector('#next');
        
        this.totalAmount = amount;
        this.answeredAmount = 0;
        this.questions = this.setQuestion(questions);
        this.nextBtn.addEventListener('click',this.nextQuestion);
        this.renderQuestion();
    }
    setQuestion(questions){
        return questions.map((ele) => new Question(ele));
    }

    renderQuestion(){
        this.questions[this.answeredAmount].render();
        this.currentQuestion.innerHTML = this.answeredAmount;
        this.totalElements.innerHTML = this.totalAmount;
    }


    nextQuestion = () =>{
        const checkedElement = this.questions[this.answeredAmount].answerElements.filter((element)=>element.firstChild.checked);
        if (checkedElement.length == 1)
        {
            this.questions[this.answeredAmount].answer(checkedElement);
            this.answeredAmount++;
            this.answeredAmount < this.totalAmount ? this.renderQuestion() : this.endQuiz();
        }
        else{
            alert("please check answer");
        }
        console.log(this.answeredAmount);
    }

    endQuiz(){
        this.quizElement.style.display = "none";
        this.finalElement.style.display = "block";
        const correct = this.noCorrectAnswers();
        new Final( correct , this.totalAmount);
    }

    noCorrectAnswers(){
        let count = 0;
        this.questions.forEach(element => {
            if(element.isCorrect)
            {
                count++;
            }
        });
        return count;
    }
}
export default Quiz;
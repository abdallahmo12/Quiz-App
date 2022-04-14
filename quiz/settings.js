// https://opentdb.com/api.php?amount=10&category=21&difficulty=easy
import Quiz from "./quiz.js";
export class Settings{
    constructor(){
        this.settingsDom = document.querySelector('.settings');
        this.quizDom = document.querySelector('.quiz');
        this.startBtn = document.querySelector("#start");
        this.categoryDom = document.querySelector('#category');
        this.amount = document.querySelector('#amount');
        this.difficulty = [
            document.querySelector('#easy'),
            document.querySelector('#medium'),
            document.querySelector('#hard')
        ];
        this.quiz = {};
        this.startBtn.addEventListener('click' , this.startQuiz);
    }
    startQuiz = async () =>{ 
        try{
            const amount = this.getAmount();
            const categoryID = this.categoryDom.value;
            const difficulty = this.getDifficulty();
            const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`; 
            let { results } =await this.fetchData(url);
            console.log(results);

            this.quiz = new Quiz(this.quizDom,amount,results);
            this.toggleElements();
            }
        catch(error){
                console.log(error);
            }
    }
    fetchData = async (url) =>{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    toggleElements = ()=>{
        this.settingsDom.style.display = "none";
        this.quizDom.style.display = "block";
    }
    getAmount(){
        const amount = parseInt(this.amount.value);
        if(amount > 0 && amount <= 10)
        {return amount}
        else
        {
            alert("please Enter valid number of questions (1:10)");
        } 
    }
    getDifficulty = () =>{
        const arr = this.difficulty;
        // const len = this.difficulty.length;
        let difficulty = arr.filter((item)=>item.checked);
        if(difficulty.length == 1)
        {
            return difficulty[0].value;
        }
        else{
            alert('please Chosse difficulty');
        }
    }
}

export default Settings;
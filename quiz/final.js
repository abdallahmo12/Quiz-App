class Final{
    constructor(correctAnswers,totalAmount){
        this.scoreElement = document.querySelector('.score');
        this.startAgain = document.querySelector('#pervious');

        this.render(correctAnswers,totalAmount);
        this.startAgain.addEventListener('click',this.reloadPage);
    }
    render(correct,total)
    {
        this.scoreElement.innerHTML = `You answered  ${correct} out of ${total} correct`;
    }
    reloadPage = () =>{
        location.reload();
    }
}

export default Final;
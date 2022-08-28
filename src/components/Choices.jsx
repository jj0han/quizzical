import { nanoid } from "nanoid"

export default function Choices({choices, holdAnswer, isHeld}) {
    const allAnswers = [
            choices.correct_answer,
            choices.incorrect_answers[0],
            choices.incorrect_answers[1],
            choices.incorrect_answers[2]
    ]

    function shuffleArray(arr) {
        let shuffle = []
        let checkedNumber = []
        while(shuffle.length < arr.length) {
            for(let i = 0; i < 4; i++){
                var temp = Math.floor(Math.random()*4);
                if(checkedNumber.indexOf(temp) === -1){
                    checkedNumber.push(temp);
                }
                else
                    i--;
            }
            for(let j = 0; j < arr.length; j++) {
                shuffle.push(arr[checkedNumber[j]])
            }
        }
        return shuffle
    } 

    let randomizedAnswers = shuffleArray(allAnswers)

    const answersButtons = randomizedAnswers.map((ans) => {
        return <button onClick={() => {holdAnswer(nanoid())}} className="Choices">{ans}</button>
    })  

    return (
        <div className="Choices__container">
            {answersButtons}
        </div>
    )
}

import Choices from "./Choices"

export default function Questions(props) {

    const allQuestions = props.questions.map((question) => {
        return  <div className="Question">
                    <p className="Question--title">{question.question}</p>
                    <Choices choices={question} isHeld={props.isHeld} holdAnswer={props.holdAnswer}/>
                </div>
    })

    return (
        <div className="AllQuestion">
            {allQuestions}
        </div>
    )
}
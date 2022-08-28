export default function Start(props) {
    return (
        <header className="Start">
            <h1 className="Start--title">Quizzical</h1>
            <h3 className="Start--description">Answer all the 5 questions right</h3>
            <button className="Start--button" onClick={props.startGame}>Start quiz</button>
        </header>
    )
}
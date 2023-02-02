import "../styles/cards.css";

function FirstChoice(props) {
    return (
        <div className="ul-container">
            <ul className="card-container">
                <li onClick={props.first} >
                    <div className="first"></div>
                </li>
                <li onClick={props.second} >
                    <div className="second"></div>
                </li>
                <li onClick={props.third} >
                    <div className="third"></div>
                </li>
                <li onClick={props.fourth} >
                    <div className="fourth"></div>
                </li>
            </ul>
        </div>
    )
};

export default FirstChoice;
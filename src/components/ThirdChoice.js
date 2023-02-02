import "../styles/cards.css";

function ThirdChoice(props) {
    return (
        <div className="ul-container">
            <ul className="card-container">
                <li onClick={props.third} >
                    <div className="third"></div>
                </li>
                <li onClick={props.second} >
                    <div className="second"></div>
                </li>
                <li onClick={props.fourth} >
                    <div className="fourth"></div>
                </li>
                <li onClick={props.first} >
                    <div className="first"></div>
                </li>
            </ul>
        </div>
    )
};

export default ThirdChoice;

function FourthChoice(props) {
    return (
        <div>
            <ul>
                <li onClick={props.first} >num1</li>
                <li onClick={props.fourth} >num4</li>
                <li onClick={props.second} >num2</li>
                <li onClick={props.third} >num3</li>
            </ul>
        </div>
    )
};

export default FourthChoice;
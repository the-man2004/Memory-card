import React, { useState } from "react";
import "../styles/main.css";

import FirstChoice from "./FirstChoice";
import SecondChoice from "./SecondChoice";
import ThirdChoice from "./ThirdChoice";
import FourthChoice from "./FourthChoice";

function Main() {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const [firstCard, setFirstCard] = useState(0);
    const [secondCard, setSecondCard] = useState(0);
    const [thirdCard, setThirdCard] = useState(0);
    const [fourthCard, setFourthCard] = useState(0);

    const [cardOrder, setCardOrder] = useState(1)

    function first() {
        if (firstCard === 0) {
            change();
            setFirstCard(1);
        } else {
            change();
            setFirstCard(0);
            setSecondCard(0);
            setThirdCard(0);
            setFourthCard(0);
            setScore(0);
        }
    }

    function second() {
        if (secondCard === 0) {
            change();
            setSecondCard(1);
        } else {
            change();
            setFirstCard(0);
            setSecondCard(0);
            setThirdCard(0);
            setFourthCard(0);
            setScore(0);
        }
    }

    function third() {
        if (thirdCard === 0) {
            change();
            setThirdCard(1);
        } else {
            change();
            setFirstCard(0);
            setSecondCard(0);
            setThirdCard(0);
            setFourthCard(0);
            setScore(0);
        }
    }

    function fourth() {
        if (fourthCard === 0) {
            change();
            setFourthCard();
        } else {
            change();
            setFirstCard(0);
            setSecondCard(0);
            setThirdCard(0);
            setFourthCard(0);
            setScore(0);
        }
    }

    function changeCards() {
        if (cardOrder === 1) {
            setCardOrder(2);
        } else if (cardOrder === 2) {
            setCardOrder(3);
        } else if (cardOrder === 3) {
            setCardOrder(4);
        } else {
            setCardOrder(1);
        }
    }

    function changeScore() {
        if (score >= highScore) {
            setHighScore(score);
        } else if (highScore === 4) {
            setHighScore(0);
        } else {
            setHighScore(highScore);
        }
    }

    function change() {
        setScore(score + 1);
        changeScore();
        changeCards();
    }

    return (
        <div className="container">
            <div className="score-container">
                <div className="scores">score {score}</div>
                {
                    score >= highScore ? <div className="scores">highScore {score}</div> : <div className="scores">highScore {highScore}</div>
                }
            </div>
            {
                score === 4 ? <h2 className="win">You win!</h2> : <h2 className="win"></h2>
            }
            {
                cardOrder === 1 ? <FirstChoice score={score} first={first} second={second} third={third} fourth={fourth} />
                : cardOrder === 2 ? <SecondChoice score={score} first={first} second={second} third={third} fourth={fourth} />
                : cardOrder === 3 ? <ThirdChoice score={score} first={first} second={second} third={third} fourth={fourth} />
                : <FourthChoice score={score} first={first} second={second} third={third} fourth={fourth} />
            }
        </div>
    )
}


export default Main;
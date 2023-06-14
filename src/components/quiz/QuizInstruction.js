import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import answers from '../../assets/img/answers.jpg'
import fifty from '../../assets/img/fifity.jpg'
import hint from '../../assets/img/hint.jpg'
import option from '../../assets/img/options.jpg'

const QuizInstraction = () => (
    <Fragment>
        <Helmet><title>Quiz Instruction Quiz App</title></Helmet>
        <div className="instruction container">
            <h1>How to Play The Game</h1>
            <p>Ensure you read this guide from start from finish</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends as soon as you time elapse.</li>
                <li>Each game consists of 15 question.</li>
                <li>
                    Every question contains 4 options.
                </li>
                <img src={option} alt="options" />
                <li>
                    Select the option which best answers the question by clicking (or selecting it.)
                </li>
                <img src={answers} alt="answers" />
                <li>
                    Each game has 2 lifelines namely:
                    <ul id="sublist">
                        <li>2 50-50 chances</li>
                        <li>5 Hints</li>
                    </ul>
                </li>
                <li>
                    Selected a 50-50 lifeline by clicking the Icon
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    will remove 2 wrong answers, leaving the correct answer and one wrong answer
                </li>
                <img src={fifty} alt="Quiz App Fifty-Fifty example" />
                <li>
                    Using a hint by clicking the icon
                    <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                    will remove one wrong answer leaving two wrong answers and one correct answer.
                    you can use as many hints as possible on a single question.
                </li>
                <img src={hint} alt="Hint" />
                <li>Feel free to quit (or retire from) the game at any time. In that case your score will be reaveled afterwards.</li>
                <li>The timer starts as soon as the game loads</li>
                <li>Let's do that if you think you've got what it take?</li>
            </ul>
            <div>
                <span className="left"><Link to="/">No take me back</Link></span>
                <span className="right"><Link to="/play">Okay, Let's do this!</Link></span>
            </div>
        </div>
    </Fragment>
)

export default QuizInstraction;
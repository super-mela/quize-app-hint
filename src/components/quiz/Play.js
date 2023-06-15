import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import M from 'materialize-css'

import questions from '../../assets/questions.json'
import isEmpty from "../../utils/is-empty";
import correctNotification from '../../assets/audio/correct-answer.mp3'
import wrongNotification from '../../assets/audio/wrong-answer.mp3'
import buttonNotification from '../../assets/audio/button-sound.mp3'

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberofQuestions: 0,
            numberofAnsweredQuestion: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty: false,
            time: {}
        }
    }

    componentDidMount() {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion)
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestion + 1];
            previousQuestion = questions[currentQuestion - 1];
            const answer = currentQuestion.answer
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberofQuestions: questions.length,
                answer
            })
        }
    }

    handleOptionClick = (e) => {
        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLocaleLowerCase()) {
            document.getElementById('correct-answer').play();
            this.correctAnswer();
        }
        else {
            document.getElementById('wrong-answer').play();
            this.wrongAnswer();
        }
    }

    correctAnswer = () => {
        M.toast({
            html: "Correct Answer!",
            classes: "toast-valid",
            displayLength: 1500,
        });
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberofAnsweredQuestion: prevState.numberofAnsweredQuestion + 1
        }),
            () => {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
            })
    }

    wrongAnswer = () => {
        navigator.vibrate(1000)
        M.toast({
            html: "Wrong Answer!",
            classes: "toast-invalid",
            displayLength: 1500,
        });
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberofAnsweredQuestion: prevState.numberofAnsweredQuestion + 1
        }),
            () => (
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)
            ))
    }

    handleButtonClick = () => {
        this.handlePlaySound()
    }

    handlePlaySound = () => {
        document.getElementById('button-sound').play();
    }

    render() {
        const { currentQuestion, numberofQuestions, currentQuestionIndex } = this.state
        return (
            <Fragment>
                <Helmet><title>Quiz page</title></Helmet>
                <Fragment>
                    <audio id="correct-answer" src={correctNotification}></audio>
                    <audio id="wrong-answer" src={wrongNotification}></audio>
                    <audio id="button-sound" src={buttonNotification}></audio>
                </Fragment>
                <div className="questions">
                    <h2>Quiz Mode</h2>
                    <div className="lifeline-contaner">
                        <p>
                            <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span><span className="lifeline">2</span>
                        </p>
                        <p>
                            <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span><span className="lifeline">5</span>
                        </p>
                    </div>
                    <div className="timer-container">
                        <p>
                            <span className="left">{currentQuestionIndex + 1} of {numberofQuestions}</span>
                            <span className="right">2:15 <span className="mdi mdi-clock-outline mdi-24px"></span></span>
                        </p>
                    </div>
                    <h5>{currentQuestion.question}</h5>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                    </div>
                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                    </div>
                    <div className="button-container">
                        <button onClick={this.handleButtonClick}>Previous</button>
                        <button onClick={this.handleButtonClick}>Next</button>
                        <button onClick={this.handleButtonClick}>Quit</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Play
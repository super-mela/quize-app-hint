import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <Helmet><title>Quiz page</title></Helmet>
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
                            <span className="left">1 of 15</span>
                            <span className="right">2:15 <span className="mdi mdi-clock-outline mdi-24px"></span></span>
                        </p>
                    </div>
                    <h5>Google was founded in what year?</h5>
                    <div className="options-container">
                        <p className="option">1997</p>
                        <p className="option">1998</p>
                    </div>
                    <div className="options-container">
                        <p className="option">1999</p>
                        <p className="option">2000</p>
                    </div>
                    <div className="button-container">
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Quit</button>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default Play
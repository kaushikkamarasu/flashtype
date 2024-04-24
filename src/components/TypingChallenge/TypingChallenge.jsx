import React from "react";
import './../TestLetter/TestLetter.jsx';
import TestLetter from "./../TestLetter/TestLetter.jsx";
import './TypingChallenge.css';

const TypingChallenge = ({ selectedParagraph, timeRemaining, timerStarted
    , testInfo, handleUserInput }) => {
    console.log(testInfo);
    return (
        <div className="typing-challenge">
            <div className="timer-container">

                <p className="timer">{timeRemaining} seconds</p>
                <p className="timer-info">
                    {!timerStarted && "Start typing to start the test"}
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}

                        {

                            testInfo.map((individualLetterInfo, index) => {

                                return <TestLetter
                                    key={index}
                                    individualLetterInfo={individualLetterInfo} />

                            })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea onChange={(e) => handleUserInput(e.target.value)} className="textarea" placeholder="Start Typing here..">

                    </textarea>
                </div>
            </div>
        </div>
    );
}


export default TypingChallenge;


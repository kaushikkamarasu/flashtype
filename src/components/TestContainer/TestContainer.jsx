import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import './TestContainer.css';
const TestContainer = ({ selectedParagraph, words,
    characters, wpm, timeRemaining, timerStarted,
    testInfo, handleUserInput, fetchNewParagraphFallback }) => {

    return (
        <div className="test-container">


            {
                timeRemaining > 0 ? (
                    <div className="typing-challenge-cont">
                        <TypingChallengeContainer
                            words={words}
                            characters={characters}
                            wpm={wpm}
                            selectedParagraph={selectedParagraph}
                            timeRemaining={timeRemaining}
                            timerStarted={timerStarted}
                            testInfo={testInfo}
                            handleUserInput={handleUserInput}
                        />
                    </div>
                ) : (
                    <div className="try-again-cont">

                        <TryAgain
                            words={words}
                            characters={characters}
                            wpm={wpm}
                            fetchNewParagraphFallback={fetchNewParagraphFallback}
                        />
                    </div>
                )

            }



        </div>
    );
}
export default TestContainer;
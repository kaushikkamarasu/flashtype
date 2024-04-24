import React from "react";
import TestContainer from "../TestContainer/TestContainer.jsx";
import './ChallengeSection.css';
const ChallengeSection = ({ selectedParagraph, words,
    characters, wpm, timeRemaining, timerStarted,
    testInfo,
    handleUserInput, fetchNewParagraphFallback }) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take the Speed Test now!
            </h1>
            <TestContainer
                selectedParagraph={selectedParagraph}
                words={words}
                characters={characters}
                wpm={wpm}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                testInfo={testInfo}
                handleUserInput={handleUserInput}
                fetchNewParagraphFallback={fetchNewParagraphFallback} />
        </div>
    );
}

export default ChallengeSection;
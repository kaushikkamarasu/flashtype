import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard.jsx";
import TypingChallenge from "../TypingChallenge/TypingChallenge.jsx";
import './TypingChallengeContainer.css';
const TypingChallengeContainer = ({ selectedParagraph, words,
    characters, wpm, timeRemaining, timerStarted, testInfo, handleUserInput }) => {
    return (
        <div className="typing-challenge-container">
            {/* details-container */}
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />


            </div>
            {/* The Actual challenge Container */}
            <div className="typewriter-container">
                <TypingChallenge
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    testInfo={testInfo}
                    handleUserInput={handleUserInput}
                />
            </div>
        </div>
    );
}

export default TypingChallengeContainer
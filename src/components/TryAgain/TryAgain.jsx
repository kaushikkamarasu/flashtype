import React from "react";
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm, fetchNewParagraphFallback }) => {
    return (
        <div className="try-again-container">
            <h1 className="test-result-header">Test-Results</h1>
            <div className="result-container">
                <p>
                    <b>Speed: </b> {wpm} wpm
                </p>
                <p>
                    <b>No of Characters:</b> {characters}
                </p>
                <p>
                    <b>No of words:</b> {words}
                </p>
            </div>
            <div>
                <button onClick={() => fetchNewParagraphFallback()}
                    className="end-buttons start-again-btn">
                    Re-try
                </button>

                <button
                    onClick={() => {
                        console.log('hello');
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com/aam",
                            "facebook-share-dialog",
                            "width=800, height=600"
                        );
                    }}
                    className="end-buttons share-btn">
                    Share
                </button>

                <button

                    onClick={() => {
                        window.open(
                            "https://twitter.com/intent/tweet?text=my-typing-speed is: ",
                            "Twitter", "width=800, height=600");
                    }}
                    className="end-buttons tweet-btn">
                    Tweet
                </button>


            </div>


        </div >

    );
}
export default TryAgain;
import React from "react";
import { SAMPLE_PARAGRAPHS } from '../../data/SampleParagraphs.js';
import ChallengeSection from "../ChallengeSection/ChallengeSection.jsx";
import Footer from "../Footer/Footer.jsx";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import './App.css';
const TotalTime = 60;
const APIUrl = "http://metaphorpsum.com/paragraphs/1/10";
const DefaultState = {
    selectedParagraph: "",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: [],
}
class App extends React.Component {

    state = DefaultState;

    fetchNewParagraphFallback = () => {
        const information = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];
        this.setState({ selectedParagraph: information });
        const selectedParagraphArray = information.split("");

        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });
        this.setState({
            ...DefaultState,
            testInfo,
            selectedParagraph: information
        });
    }

    defaultRenderFunction = () => {
        fetch(APIUrl).then(response => response.text()).
            then((information) => {
                this.setState({ selectedParagraph: information });
                const selectedParagraphArray = information.split("");

                const testInfo = selectedParagraphArray.map((selectedLetter) => {
                    return {
                        testLetter: selectedLetter,
                        status: "notAttempted",
                    };
                });
                this.setState({
                    ...DefaultState,
                    testInfo,
                    selectedParagraph: information
                });
            });
    }

    componentDidMount() {
        this.fetchNewParagraphFallback();
    }
    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                //change the wpm
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;

                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm)
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }
    handleUserInput = (inputkey) => {

        if (this.state.timerStarted === false) {
            this.startTimer();
        }
        const characters = inputkey.length;
        const words = inputkey.split(" ").length;
        const index = characters - 1;
        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted"
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });

            return;
        }
        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words });
            return;
        }
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1)) {
            testInfo[index + 1].status = "notAttempted";
        }
        if (inputkey[index] === testInfo[index].testLetter) {
            testInfo[index].status = "correct";
        }
        else testInfo[index].status = "incorrect";

        this.setState(
            {
                testInfo,
                words,
                characters
            }
        )
    }

    render() {

        return (
            <div className="app">
                <Nav />
                <Landing />
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    handleUserInput={this.handleUserInput}
                    fetchNewParagraphFallback={this.fetchNewParagraphFallback}
                />
                <Footer />

            </div>
        );
    }
}
export default App;
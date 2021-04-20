import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { TennisGame } from "./APITenis/tenis";

export function TenisApp() {
  const [player1, setPlayer1Name] = useState("");
  const [player2, setPlayer2Name] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const GAME = new TennisGame(player1, player2);
  const [isWinned, setIsWinned] = useState(false);
  const [score, setScore] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    setPlayer1Name(event.target.elements.playerOneName.value);
    setPlayer2Name(event.target.elements.playerTwoName.value);
    setIsStarted(true);
  }

  function disableIfIsWinned() {
    if (GAME.getScore().toString().includes("Win")) {
      setIsWinned(true);
    }
  }

  function player1AddPoint(event: any) {
    event.preventDefault();
    GAME.playerOneScores();
    showScore();
  }

  function player2AddPoint(event: any) {
    event.preventDefault();
    GAME.playerTwoScores();
    showScore();
  }

  function showScore() {
    disableIfIsWinned();
    setScore(GAME.getScore().toString());
  }

  function newGame() {
    setIsStarted(false);
  }

  if (isStarted) {
    return (
      <div className="alert alert-success">
        <form id="formNewTenis" onSubmit={newGame}>
          <div className="row">
            <div className="col">
              <label>{player1}</label>
              <br />
              <button
                disabled={isWinned}
                className="btn btn-secondary"
                onClick={player1AddPoint}
              >
                Won Point
              </button>
            </div>

            <div className="col">
              <label>{player2}</label>
              <br />
              <button
                disabled={isWinned}
                className="btn btn-secondary"
                onClick={player2AddPoint}
              >
                Won Point
              </button>
            </div>
          </div>
          <br />
          <div className="card align-items-center text-white bg-success">
            <div className="card-block text-center ">
              <h4 className="card-title">SCORE</h4>
            </div>
            <ul className="list-group list-group-flush " id="score-list"></ul>
            <li>{<strong> {score}</strong>} </li>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              New Game
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="alert alert-success">
        <form id="formTenis" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <label>Player 1</label>
              <input
                type="text"
                name="playerOneName"
                className="form-control"
                placeholder="Player one"
                required={true}
              />
            </div>
            <div className="col">
              <label>Player 2</label>
              <input
                type="text"
                name="playerTwoName"
                className="form-control"
                placeholder="Player two"
                required={true}
              />
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Play!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TenisApp;

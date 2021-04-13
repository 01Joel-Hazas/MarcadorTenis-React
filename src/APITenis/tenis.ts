export class TennisGame {
  private playerOneScore: number = 0;
  private playerTwoScore: number = 0;
  private playerTwoName: string = "";
  private playerOneName: string = "";

  public constructor(playerOneName: string, playerTwoName: string) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
  }

  public getScore(): string {
    if (this.hasWinner()) {
      return "Win " + this.playerWithHighestScore();
    }

    if (this.hasAdvantage()) {
      return "Advantage " + this.playerWithHighestScore();
    }

    if (this.isDeuce()) return "Deuce";

    if (this.playerOneScore === this.playerTwoScore) {
      return this.translateScore(this.playerOneScore) + " all";
    }

    return (
      this.translateScore(this.playerOneScore) +
      "," +
      this.translateScore(this.playerTwoScore)
    );
  }

  private isDeuce(): boolean {
    return (
      this.playerOneScore >= 3 && this.playerTwoScore === this.playerOneScore
    );
  }

  private playerWithHighestScore(): string {
    if (this.playerOneScore > this.playerTwoScore) {
      return this.playerOneName;
    } else {
      return this.playerTwoName;
    }
  }

  private hasWinner(): boolean {
    if (
      this.playerTwoScore >= 4 &&
      this.playerTwoScore >= this.playerOneScore + 2
    )
      return true;
    if (
      this.playerOneScore >= 4 &&
      this.playerOneScore >= this.playerTwoScore + 2
    )
      return true;
    return false;
  }

  private hasAdvantage(): boolean {
    if (
      this.playerTwoScore >= 4 &&
      this.playerTwoScore === this.playerOneScore + 1
    )
      return true;
    if (
      this.playerOneScore >= 4 &&
      this.playerOneScore === this.playerTwoScore + 1
    )
      return true;

    return false;
  }

  public playerOneScores() {
    this.playerOneScore++;
  }

  public playerTwoScores() {
    this.playerTwoScore++;
  }

  private translateScore(score: number): string {
    switch (score) {
      case 3:
        return "Forty";
      case 2:
        return "Thirty";
      case 1:
        return "Fifteen";
      case 0:
        return "Love";
    }
    return score + " is not a valid score";
  }
}

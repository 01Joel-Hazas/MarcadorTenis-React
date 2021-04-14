export class TennisGame {
  private playerOneScore: number = 0;
  private playerTwoScore: number = 0;
  private playerTwoName: string = "";
  private playerOneName: string = "";
  private maxScore: number = 40;
  private addScore: number = 15;

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
      " - " +
      this.translateScore(this.playerTwoScore)
    );
  }

  private isDeuce(): boolean {
    return (
      this.playerOneScore >= 30 && this.playerTwoScore === this.playerOneScore
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
      this.playerTwoScore >= this.maxScore &&
      this.playerTwoScore >= this.playerOneScore + 30
    )
      return true;
    if (
      this.playerOneScore >= this.maxScore &&
      this.playerOneScore >= this.playerTwoScore + 30
    )
      return true;
    return false;
  }

  private hasAdvantage(): boolean {
    if (
      this.playerTwoScore >= this.maxScore &&
      this.playerTwoScore === this.playerOneScore + this.addScore
    )
      return true;
    if (
      this.playerOneScore >= this.maxScore &&
      this.playerOneScore === this.playerTwoScore + this.addScore
    )
      return true;

    return false;
  }

  public playerOneScores() {
    this.playerOneScore += this.addScore;
  }

  public playerTwoScores() {
    this.playerTwoScore += this.addScore;
  }

  private translateScore(score: number): string {
    switch (score) {
      case 40:
        return "Forty";
      case 30:
        return "Thirty";
      case 15:
        return "Fifteen";
      case 0:
        return "Love";
    }
    return score + " is not a valid score";
  }
}

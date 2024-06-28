const leaderboard = {
    John: 0,
    Paul: 0,
    George: 0,
    Ringo: 0,
  };
  
  const power = {
    John: 100,
    Paul: 90,
    George: 80,
    Ringo: 70,
  };
  
  const POINTS_FOR_WIN = 10;
  const POINTS_FOR_LOSS = -5;
  const POINTS_FOR_DRAW = 5;
  
  const adjustScores = (winner, loser, winPoints, lossPoints) => {
    leaderboard[winner] += winPoints;
    leaderboard[loser] += lossPoints;
  };
  
  const updateLeaderboard = (player1, player2) => {
    const power1 = power[player1];
    const power2 = power[player2];
    let message;
  
    if (power1 === power2) {
      leaderboard[player1] += POINTS_FOR_DRAW;
      leaderboard[player2] += POINTS_FOR_DRAW;
      message = 'Draw!';
    } else {
      const winner = power1 > power2 ? player1 : player2;
      const loser = winner === player1 ? player2 : player1;
      adjustScores(winner, loser, POINTS_FOR_WIN, POINTS_FOR_LOSS);
      message = `${winner} wins!`;
    }
  
    console.log(message, 'Leaderboard:', leaderboard);
  };
  
  const play = (player1, player2) => {
    updateLeaderboard(player1, player2);
  };
  
  play('George', 'Ringo');
  play('John', 'Paul');
  play('John', 'Ringo');
  play('Paul', 'George');
  
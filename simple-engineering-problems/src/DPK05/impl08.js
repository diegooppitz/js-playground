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
  
  const getPower = (player) => power[player];
  
  // Determina o vencedor e perdedor (ou empate) com base nos poderes
  const determineOutcome = (player1, player2) => {
    const power1 = getPower(player1);
    const power2 = getPower(player2);
  
    if (power1 === power2) return { type: 'draw', players: [player1, player2] };
  
    const winner = power1 > power2 ? player1 : player2;
    const loser = winner === player1 ? player2 : player1;
    return { type: 'win', winner, loser };
  };
  
  // Atualiza o placar com base no resultado da partida
  const updateLeaderboard = ({ type, winner, loser, players }) => {
    switch (type) {
      case 'win':
        adjustPointsForWin(winner, loser);
        break;
      case 'draw':
        adjustPointsForDraw(players);
        break;
    }
  };
  
  const adjustPointsForWin = (winner, loser) => {
    leaderboard[winner] += POINTS_FOR_WIN;
    leaderboard[loser] += POINTS_FOR_LOSS;
  };
  
  const adjustPointsForDraw = (players) => {
    players.forEach(player => leaderboard[player] += POINTS_FOR_DRAW);
  };
  
  const play = (player1, player2) => {
    const outcome = determineOutcome(player1, player2);
    updateLeaderboard(outcome);
  
    console.log(outcome.type === 'win' ? outcome.winner : 'Draw!', 'Leaderboard:', leaderboard);
  };
  
  play('George', 'Ringo');
  play('John', 'Paul');
  play('John', 'Ringo');
  play('Paul', 'George');
  
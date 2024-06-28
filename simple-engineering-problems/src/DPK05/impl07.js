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
  
  const getPower = (player) => power[player];
  
  // Determina o resultado da partida
  const determineOutcome = (player1, player2) => {
    const power1 = getPower(player1);
    const power2 = getPower(player2);
  
    if (power1 === power2) {
      return { type: 'draw', players: [player1, player2] };
    }
  
    const winner = power1 > power2 ? player1 : player2;
    const loser = winner === player1 ? player2 : player1;
    return { type: 'win', winner, loser };
  };
  
  // Atualiza o placar com base no resultado da partida
  const updateLeaderboard = ({ type, winner, loser, players }) => {
    if (type === 'win') {
      leaderboard[winner] += 10;
      leaderboard[loser] -= 5;
      return;
    }
    
    players.forEach(player => leaderboard[player] += 5);
  };
  
  // Executa uma partida e exibe os resultados
  const play = (player1, player2) => {
    const outcome = determineOutcome(player1, player2);
    updateLeaderboard(outcome);
  
    console.log(outcome.type === 'win' ? outcome.winner : 'Draw!', 'Leaderboard:', leaderboard);
  };
  
  play('George', 'Ringo');
  play('John', 'Paul');
  play('John', 'Ringo');
  play('Paul', 'George');

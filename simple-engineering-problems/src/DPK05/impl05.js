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

// determina o resultado da partida
const determineOutcome = (player1, player2) => {
  const power1 = getPower(player1);
  const power2 = getPower(player2);

  if (power1 === power2) {
    return { type: 'draw' };
  }

  const winner = power1 > power2 ? player1 : player2;
  const loser = winner === player1 ? player2 : player1;
  return { type: 'win', winner, loser };
};

// atualiza o placar com base no resultado
const updateLeaderboard = (outcome, player1, player2) => {
  if (outcome.type === 'win') {
    leaderboard[outcome.winner] += 10;
    leaderboard[outcome.loser] -= 5;
  } else {
    leaderboard[player1] += 5;
    leaderboard[player2] += 5;
  }
};

// executa uma partida e exibe resultados
const play = (player1, player2) => {
  const outcome = determineOutcome(player1, player2);
  updateLeaderboard(outcome, player1, player2);

  console.log(outcome.type === 'win' ? outcome.winner : 'Draw!', 'Leaderboard:', leaderboard);
};

play('George', 'Ringo');
play('John', 'Paul');
play('John', 'Ringo');

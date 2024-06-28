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

const determineWinner = (player1, player2) => {
  const power1 = getPower(player1);
  const power2 = getPower(player2);

  if (power1 === power2) return null;
  return power1 > power2 ? player1 : player2;
};

const determineLoser = (winner, player1, player2) => {
  if (!winner) return null;
  return winner === player1 ? player2 : player1;
};

// Atualizar o placar baseado nos jogadores
const updateLeaderboard = (winner, player1, player2) => {
  if (winner) {
    const loser = determineLoser(winner, player1, player2);
    leaderboard[winner] += 10;
    leaderboard[loser] -= 5;
    return;
  }

  leaderboard[player1] += 5;
  leaderboard[player2] += 5;
};

const play = (player1, player2) => {
  const winner = determineWinner(player1, player2);
  updateLeaderboard(winner, player1, player2);

  console.log(winner ? winner : 'Draw!', 'Leaderboard:', leaderboard);
};

play('George', 'Ringo');
play('John', 'Paul');
play('John', 'Ringo');

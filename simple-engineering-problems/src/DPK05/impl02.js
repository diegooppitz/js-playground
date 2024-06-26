let leaderboard = {
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

const getPower = (person) => power[person];

// determine winner and return the winner's name
const getWinner = (player1, player2) => {
  const power1 = getPower(player1);
  const power2 = getPower(player2);

  return power1 > power2 ? player1 : power1 < power2 ? player2 : null;
};

// update the leaderboard after all matches
const updateLeaderboard = (player1, player2) => {
  const winner = getWinner(player1, player2);

  if (winner) {
    const looser = winner === player1 ? player2 : player1;
    leaderboard[winner] += 10;
    leaderboard[looser] -= 5;
    return winner;
  }

  // If it's a draw
  Object.keys(leaderboard).forEach(player => {
    leaderboard[player] += 5;
  });

  return 'Draw!';
};

const play = (player1, player2) => {
  const result = updateLeaderboard(player1, player2);

  console.log(result);
  console.log('Leaderboard:', leaderboard);
};

play('John', 'Paul');
play("John", "Ringo")

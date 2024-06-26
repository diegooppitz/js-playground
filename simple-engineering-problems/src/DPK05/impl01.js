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
  
    let winner;
    if (power1 > power2) {
      winner = player1;
    } else if (power1 < power2) {
      winner = player2;
    } else {
      winner = null;
    }
  
    return winner;
  };
  
  // update the leaderboard after all matches
  const updateLeaderboard = (player1, player2) => {
    const winner = getWinner(player1, player2);
    let looser;
    if (winner) {
      looser = player1 === winner ? player2 : player1;
      leaderboard[winner] += 10;
      leaderboard[looser] -= 5;
  
      return winner;
    }
  
    leaderboard[player1] += 5;
    leaderboard[player2] += 5;
    return 'Draw!';
  };
  
  const play = (player1, player2) => {
    const result = updateLeaderboard(player1, player2);
  
    console.log(result);
    console.log('leaderboard:', leaderboard);
  };
  
  play('John', 'Paul');
  play("John", "Ringo")
  
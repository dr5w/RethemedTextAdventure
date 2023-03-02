// Text Adventure Game
const start = `Welcome to the Fortnite Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You are trying to kill an enemy. Should you...
1. Peanut butter peak to get a max pump shot and then piece up the player
OR
2. Carefully get in the box in front of the enemy and ramp phase through the box
${enter}`;

const gameOver1 = `You phase through the box and the player 200 pumps you because he had his shotgun aimed down. ${gameOver}`;

const q2 = `When you piece him up. Should you...
1. Make a box to the right and when he walks in window edit and 200 pump him
OR
2. Run straight up to the box, take his wall, window edit and try to put a cone in his box
${enter}`;

const gameOver2 = `You are 200 pumped while window editing due to not crouching to stay hidden. ${gameOver}`;

const q3 = `You 200 pump him and collect his loot. Suddenly you hear another player creeping up trying to third party. Should you...
1. Heal with floppers, shield fish, and mini's then prepare to fight.
OR
2. Quickly use the extra chug splashes the player you killed had then take a shield fish to get max health before you fight.
${enter}`;

const gameOver3 = `You take forever to heal and the player quickly phases through your box and killing you mid air. ${gameOver}`;

const q4 = `You heal fast enough and peanut butter peak the player, hit him for 120, and then put a cone on his head. Should you...
1. Break the wall with your smg and spray him catching him offguard.
OR
2. Edit the top part of the wall and 50/50 the shot
${enter}`;

const gameOver4 = `You get 200 pumped with the 50/50 and lose the fight. ${gameOver}`;

const q5 = `You kill the player and heal. It is now a 1v1 with zone closing in. Should you...
1. Stay lowground and let the other player take height and shoot him down.
OR
2. Crank to height and spray down on him
${enter}`;

const gameOver5 = `You shoot him down and he 200 pumps you on the way down. To make matters worse it was Bugha and he puts you in his next montage. ${gameOver}`;

const win = `You spray down on him, take a leap of faith, and 200 pump him for the win. CONGRATULATIONS! YOU JUST EARNED YOURSELF A VICTORY ROYALE!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// NESTED CONDITIONALS STATEMENTS
// 1ST Conditional Statements
// NOTE: Prompts return the value entered in as as String. That is why double equals is used instead of triple equals (AKA Strict Equals)
if (userInput == 1){
  userInput = prompt(q2);

  // 2ND Conditional Statement
  if (userInput == 1){
    userInput = prompt(q3);

    // 3RD Conditional Statement
    if (userInput == 2){
      userInput = prompt(q4);

      // 4TH Conditional Statement
      if (userInput == 1){
        userInput = prompt(q5);

        // 5TH Conditional Statement
        if (userInput == 2){
          alert(win);
        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}

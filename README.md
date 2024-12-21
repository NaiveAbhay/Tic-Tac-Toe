# Tic-Tac-Toe Game

A simple and interactive Tic-Tac-Toe game built using JavaScript, HTML, and CSS. The game allows two players to compete, keeps track of scores, and includes options for rematches and resetting the game.

## Features

- **Player Names**: Input player names before starting the game.
- **Score Tracking**: Keeps track of scores for both players.
- **Winner Announcement**: Displays the winner of each round or declares a draw.
- **Round System**: Automatically increments the round number after each game.
- **Rematch Option**: Allows players to reset the board while keeping the scores.
- **Reset Option**: Resets the entire game, including scores and player names.

## How to Play

1. Enter names for Player 1 and Player 2.
2. Click on the grid to place your mark (Player 1 uses ⭕, Player 2 uses ❌).
3. The game automatically detects the winner or a draw.
4. Use the **Rematch** button to start a new round while retaining scores.
5. Use the **Reset** button to restart the game completely.

## Code Overview

### JavaScript Logic

- **Input Handling**: Captures and validates player names.
- **Game Grid**: Listens for clicks to place marks and updates the board.
- **Winning Logic**: Checks for winning combinations using predefined patterns.
- **Score Management**: Updates and displays scores for both players.
- **Rematch and Reset**: Provides functionality to restart the game.

### Key Variables

- `name1`, `name2`: Store player names.
- `p1score`, `p2score`: Track scores for Player 1 and Player 2.
- `roundno`: Tracks the current round number.
- `boxes`: Represents the game grid as an array.
- `data`: Predefined winning combinations.

### Event Listeners

- **Submit Button**: Captures player names and initializes the scoreboard.
- **Grid Click**: Handles placing marks and checking for a winner.
- **Rematch Button**: Resets the board while retaining scores and round number.
- **Reset Button**: Reloads the page to reset the entire game.

## File Structure

- `index.html`: The HTML structure of the game.
- `style.css`: The CSS for styling the game.
- `script.js`: The JavaScript logic for game functionality.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open `index.html` in your browser.
3. Start playing!





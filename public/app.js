// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if (cells[index] === "") {
      // Update the game state with the current player's move
      cells[index] = currentPlayer;
      element.textContent = currentPlayer;
      
      // Check for winning conditions
      for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
          // Player has won, display the result
          result.textContent = `${currentPlayer} wins!`;
          
          // Disable all buttons
          btns.forEach((btn) => btn.removeEventListener("click", ticTacToe));
          
          return; // Exit the function, the game is over
        }
      }
  
      // Check for a draw
      if (!cells.includes("")) {
        result.textContent = "It's a draw!";
        return;
      }
  
      // Switch to the next player
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      result.textContent = `Player ${currentPlayer}'s turn`;
    }
  };
  

    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */

// Function to reset the game
const resetGame = () => {
    // Reset the game state
    cells = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
  
    // Clear the result message
    result.textContent = "Player X's turn";
  
    // Re-enable buttons and reset their content
    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => ticTacToe(btn, i));
      btn.textContent = "";
    });
  };
  
  document.querySelector("#reset").addEventListener("click", resetGame);
  
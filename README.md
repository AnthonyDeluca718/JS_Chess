## JavaScript Chess

[Live Site](https://anthonydeluca718.github.io/JS_Chess/)

### Display: Standard Rules

![Gameplay](https://github.com/AnthonyDeluca718/JS_Chess/blob/master/assets/images/BoardState.png)

### Display: Random Starting Position

![RandomBoard](https://github.com/AnthonyDeluca718/JS_Chess/blob/master/assets/images/RandomInitial.png)

### Functionality

All of the core functionality of chess is implemented:
- Players are restricted to legal moves
- The game automatically checks for Checkmate and Stalemate
- Castling is implemented correctly (you cannot castle through check or if either the King or the Rook has previously moved. You also cannot castle when in check)
- Alerts when a player is put into check

However some rarely occurring rules are not implemented:
- En Passant
- Threefold repetition draws
- Fifty Move Rule

### Running the App Locally
From the root directory run:
-npm install
-webpack
-view index.html in your browser

The compiled CSS file is included in the repo.

### Main Technologies

- Game Logic is written is Javascript (mostly ES6)
- Interactive display uses React/Redux
- Webpack is used to bundle and serve up the various scripts

### Implementation Notes

- The chess game rules are implemented in located in /game_logic
- A large amount of the logic for handling player turns and input is handled by the reducer function in /frontend
- Object Oriented Design: Board and Pieces. The The design is flexible. Adding random pieces only required adding a random set up function and setting up the frontend randomize button. More modes could be easily added

#### Game Logic
- All pieces (Bishops, Rooks, etc) inherit from the Piece Class
- Empty Board spaces are occupied by null pieces which also inherits from the Piece Class
- The chessboard contains an array of 64 pieces, each of those pieces stores a reference to its board
- The board sets itself up, enforces that moves are legal and determines if the game is over
- In order to test if we are in check we use the following procedure:
  - duplicate the board
  - make the proposed move without testing for check
  - check if the active player's king is in check on the resulting board

#### Frontend: React
- The entry file for webpack is located in chess.js. This file renders the react content to the DOM.
- The application is written using the React-Redux. The full application state is contained in the store:
  - Chess Board
  - Current Player
  - Move Buffer
  - ActiveSquare (square selected by the player)
  - Errors
  - GameOver (variable saying if the game is over)
- Board
  - Displays an array of 64 Square React Components
  - Each square is passed a function that send a dispatch to the reducer when that square is selected by the player
- Greeting
  - Receives the currentPlayer and gameOver variables.
  - Displays an appropriate message above the board.
- Reset
  - Reset and randomizer buttons
  - Stateless, props can dispatch "RESET_GAME" and "RANDOM_GAME" to the reducer
- Footer
  - Purely decorative

#### SCSS Structure
- The entry file is located in ./assets/SCSS/application.scss, the compiled file is located in ./assets/stylesheets/application.css
- The CSS for the modals is defined in the files for the react components that display them

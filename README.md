## JavaScript Chess

[Live Site]
(https://anthonydeluca718.github.io/JS_Chess/)

### Functionality

All of the core functionality of chess is implemented:
- Players are restricted to legal moves
- The game automatically checks for Checkmate and Stalemate
- Castling is implemented correctly (you cannot castle through check or if either the King or the Rook has previously moved. You also cannot castle when in check)
- Alerts when a player is put into check

However some rarely occurring rules are not implemented:
- En Peasant
- Threefold repetition draws
- Fifty Move Rule

### Display: Standard Rules

![Gameplay] (https://github.com/AnthonyDeluca718/JS_Chess/blob/master/assets/images/BoardState.png)

### Display: Random Starting Position

![RandomBoard] (https://github.com/AnthonyDeluca718/JS_Chess/blob/master/assets/images/RandomInitial.png))

### Main Technologies

- Game Logic is written is Javascript (mostly ES6)
- Interactive display uses React/Redux
- Webpack is used to bundle and serve up the various scripts

### Implementation Notes
- The chess game rules are implemented in located in /game_logic
- A large amount of the logic for handling player turns and input is handled by the reducer function in /frontend.
- Object Oriented Design: Board and Pieces. The The design is flexible. Adding random pieces only required adding a random set up function and setting up the frontend randomize button. More modes could be easily added.

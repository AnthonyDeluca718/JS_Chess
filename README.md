## Anthony Deluca Proposal: Space Re-skin of the Chrome Dinosaur Game

### Background

Chrome has a "hidden" dinosaur game which is available when the browser is offline. The controls are simple, just a space bar to jump, but the game is quite popular. My goal is to first get a playable re-skin of the game. Then I will add at least one extra mechanic to differentiate my game.

I have various goals in choosing this project. I have played various games from other cohorts. I think the biggest issue is that many games were not optimally fun for first time users. Either the controls were not responsive or the difficulty was too high. The actual chrome dinosaur game is very appealing to people even on the first try. Its also easy to control the difficulty of the chrome game. I also think the chrome game is simple enough there is time to include decent graphics and extra features beyond the existing chrome game.

### Functionality & MVP

Minimal Version:

- [ ] Pause and Start
- [ ] High Score
- [ ] Basic Version controls smoothly use space to jump and enter to pause.
- [ ] Re-skin to space. birds become UFOs. Trees are rocks.

Extended version:
- [ ] Add a color mechanic. The player changes color by holding one of asdf.
- [ ] Vertical strips appear on the screen. The player must be the same color as the strip to pass
- [ ] Make sure we have multiple difficulty modes
- [ ] If there is time we can add more features
- [ ] A production README

### Wireframes

The opening screen will explain the controls and allow the user to pick a difficulty level. The basic game commands are space to jump and enter/return to pause. The extended version includes asdf to change color.

![Gameplay] (https://github.com/AnthonyDeluca718/JS_CHESS/blob/master/assets/Images/gameplay.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Game Logic in Javscript
- `Easel.js` with `HTML5 Canvas` to display the game
- Webpack to bundle and serve up the various scripts

### Implementation Timeline (assuming all goes well)

**Day 1**:

Get easle.js to display an object scrolling across the screen at the right speeds.

**Day 2**:

Minimal game logic.

**Day 3**: (plus weekend if needed)

Color Mechanic and difficulty modes.

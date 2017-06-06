// Wait till the browser is ready to render the game (avoids glitches)
var gManager;
window.requestAnimationFrame(function () {
  gManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

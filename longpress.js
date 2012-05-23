/**
 * Gesture recognizer for the `longpress` gesture.
 *
 * Longpress happens when pointer is pressed and doesn't get released
 * for a while (without movement).
 */
(function(exports) {
  const LONGPRESS_TIME = 600;

  function pointerDown(e) {
    // Start a timer.
    this.longPressTimer = setTimeout(function() {
      payload = {};
      window.createEvent('gesturelongpress', e.target, payload);
    }, LONGPRESS_TIME);
  }

  function pointerMove(e) {
    clearTimeout(this.longPressTimer);
  }

  function pointerUp(e) {
    clearTimeout(this.longPressTimer);
  }

  /**
   * Make the specified element create gesturetap events.
   */
  function emitLongPresses(el) {
    el.addEventListener('pointerdown', pointerDown)
    el.addEventListener('pointermove', pointerMove)
    el.addEventListener('pointerup', pointerUp)
  }

  exports.emitLongPresses = emitLongPresses;

})(window);
// ============================================
// 03 - Events & addEventListener
// ============================================

const btn1 = document.getElementById('btn1');
const output = document.getElementById('output');

const log = (msg) => {
  output.textContent = msg;
  console.log(msg);
};

// --- addEventListener(event, callback) ---
btn1.addEventListener('click', function(event) {
  log('Button clicked! ✅');
  console.log('Event object:', event);       // the event object
  console.log('Target:', event.target);      // element that was clicked
  console.log('Type:', event.type);          // 'click'
});

// --- Common Event Types ---
// 'click'         - mouse click
// 'dblclick'      - double click
// 'mouseover'     - mouse enters element
// 'mouseout'      - mouse leaves element
// 'keydown'       - key pressed down
// 'keyup'         - key released
// 'input'         - value changes in input
// 'change'        - value confirmed changed (e.g., select, checkbox)
// 'submit'        - form submitted
// 'focus'         - element gains focus
// 'blur'          - element loses focus
// 'load'          - page/resource loaded
// 'scroll'        - user scrolls

// --- Removing event listener ---
// To remove, the function must be named (not anonymous)
function handleHover() {
  console.log('Mouse entered btn1');
}
btn1.addEventListener('mouseover', handleHover);
// btn1.removeEventListener('mouseover', handleHover); // to remove

console.log('--- Events ✅ ---');

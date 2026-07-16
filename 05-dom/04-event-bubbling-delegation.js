// ============================================
// 04 - Event Bubbling & Event Delegation
// ============================================

// --- EVENT BUBBLING ---
// When you click a child element, the event "bubbles up" to parent elements.
// child click → parent click → grandparent click → ... → document

document.getElementById('main-box').addEventListener('click', function(e) {
  console.log('main-box was clicked (bubbled up from:', e.target.tagName, ')');
});

// --- stopPropagation() ---
// Stops bubbling. Use sparingly — can cause bugs.
// child.addEventListener('click', (e) => {
//   e.stopPropagation();
// });

// --- preventDefault() ---
// Stops the default browser behavior (e.g., form submit, link navigation)
// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // page won't reload
// });

// --- EVENT DELEGATION ---
// Instead of adding listener to EACH child, add ONE listener to the parent.
// Then check e.target to know which child was clicked.
// ✅ More efficient | Works for dynamically added elements too!

const list = document.getElementById('list');

list.addEventListener('click', function(e) {
  // Only react if an <li> was clicked
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
    e.target.style.backgroundColor = '#d4edda'; // green highlight
  }
});

console.log('--- Bubbling & Delegation ✅ ---');

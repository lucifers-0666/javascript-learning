// ============================================
// 06 - DOM Traversal
// ============================================
// Navigate the DOM tree using parent/child/sibling relationships

const listEl = document.getElementById('list');

// --- Parent ---
console.log('parentNode:', listEl.parentNode);           // parent node (includes text nodes)
console.log('parentElement:', listEl.parentElement);     // parent ELEMENT only (safer)

// --- Children ---
console.log('children:', listEl.children);               // HTMLCollection of child ELEMENTS only
console.log('childNodes:', listEl.childNodes);           // NodeList (includes text nodes, comments)
console.log('firstElementChild:', listEl.firstElementChild);   // first child element
console.log('lastElementChild:', listEl.lastElementChild);     // last child element

// --- Siblings ---
const firstLi = listEl.firstElementChild;
if (firstLi) {
  console.log('nextElementSibling:', firstLi.nextElementSibling);   // next sibling element
  console.log('previousElementSibling:', firstLi.previousElementSibling); // previous sibling (null for first)
}

// --- closest() — travels UP the tree ---
// Finds nearest ancestor matching the selector
const btn = document.getElementById('btn1');
console.log('closest .box:', btn.closest('.box')); // finds the .box ancestor

// --- contains() ---
console.log('main-box contains list?', document.getElementById('main-box').contains(listEl)); // false - list is in another box

console.log('--- DOM Traversal ✅ ---');

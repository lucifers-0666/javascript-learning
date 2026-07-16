// ============================================
// 05 - Creating & Removing Elements
// ============================================

const list = document.getElementById('list');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let count = 4; // start from Item 4

// --- createElement + append ---
btn2.addEventListener('click', function() {
  // 1. Create the element
  const newItem = document.createElement('li');

  // 2. Set its content
  newItem.textContent = `Item ${count++} (dynamic)`;

  // 3. Append to parent
  list.appendChild(newItem);          // adds at END
  // list.prepend(newItem);           // adds at START
  // list.insertBefore(newItem, ref); // adds before a reference node

  console.log('New item added!');
});

// --- remove() ---
btn3.addEventListener('click', function() {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    lastItem.remove();  // removes from DOM
    count--;
    console.log('Last item removed!');
  } else {
    console.log('List is empty!');
  }
});

// --- cloneNode ---
// const clone = someElement.cloneNode(true); // true = deep clone (includes children)

// --- replaceWith ---
// oldElement.replaceWith(newElement);

console.log('--- Creating & Removing Elements ✅ ---');

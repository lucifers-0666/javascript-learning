// ============================================
// 08 - Styles & Attributes
// ============================================

const para = document.getElementById('para');

// --- Inline Styles ---
// element.style.propertyName (camelCase)
para.style.padding = '8px';
para.style.borderRadius = '4px';
para.style.border = '1px solid teal';

// --- getComputedStyle — reads ACTUAL applied styles (including CSS classes) ---
const computed = window.getComputedStyle(para);
console.log('Computed font size:', computed.fontSize);
console.log('Computed color:', computed.color);

// --- getAttribute / setAttribute ---
const btn1El = document.getElementById('btn1');

// Set a custom attribute
btn1El.setAttribute('data-action', 'greet');
btn1El.setAttribute('disabled', '');           // disable button

console.log('data-action:', btn1El.getAttribute('data-action')); // 'greet'
console.log('id:', btn1El.getAttribute('id'));                   // 'btn1'

// Remove attribute
btn1El.removeAttribute('disabled'); // re-enable button

// --- hasAttribute ---
console.log('Has data-action?', btn1El.hasAttribute('data-action')); // true

// --- dataset (access data-* attributes easily) ---
btn1El.dataset.userId = '42';              // sets data-user-id="42"
console.log('dataset userId:', btn1El.dataset.userId); // '42'

// --- Toggling CSS classes (better than inline styles for theming) ---
// para.classList.add('dark-mode');
// para.classList.remove('dark-mode');
// para.classList.toggle('dark-mode');

console.log('--- Styles & Attributes ✅ ---');

// ============================================
// 01 - Selecting Elements
// ============================================

// --- getElementById ---
const mainBox = document.getElementById('main-box');
console.log('getElementById:', mainBox);

// --- querySelector (returns FIRST match) ---
const firstBtn = document.querySelector('button');
console.log('querySelector (first button):', firstBtn);

// --- querySelectorAll (returns NodeList of ALL matches) ---
const allBtns = document.querySelectorAll('button');
console.log('querySelectorAll (all buttons):', allBtns);
console.log('Total buttons:', allBtns.length);

// --- getElementsByClassName ---
const boxes = document.getElementsByClassName('box');
console.log('getElementsByClassName (.box):', boxes);

// --- getElementsByTagName ---
const listItems = document.getElementsByTagName('li');
console.log('getElementsByTagName (li):', listItems);

// --- NOTE: querySelector vs getElementById ---
// querySelector is more flexible (supports any CSS selector)
// getElementById is slightly faster for simple ID lookups
console.log('--- Selecting Elements ✅ ---');

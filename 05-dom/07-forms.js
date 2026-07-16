// ============================================
// 07 - Forms & Input Handling
// ============================================

const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const output2 = document.getElementById('output');

// --- Reading input value ---
greetBtn.addEventListener('click', function() {
  const name = nameInput.value.trim(); // .trim() removes extra spaces

  if (name === '') {
    output2.textContent = '⚠️ Please enter your name!';
    output2.style.color = 'orange';
    return;
  }

  output2.textContent = `Hello, ${name}! 👋`;
  output2.style.color = '#0f0';
  nameInput.value = ''; // clear input after
});

// --- 'input' event — fires on every keystroke ---
nameInput.addEventListener('input', function(e) {
  console.log('Current input value:', e.target.value);
});

// --- 'keydown' — detect Enter key ---
nameInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    greetBtn.click(); // trigger button click
  }
});

// --- focus / blur ---
nameInput.addEventListener('focus', () => console.log('Input focused'));
nameInput.addEventListener('blur', () => console.log('Input lost focus'));

// --- Form submit (for actual <form> elements) ---
// form.addEventListener('submit', (e) => {
//   e.preventDefault();            // stop page reload
//   const data = new FormData(e.target);
//   console.log(data.get('fieldName'));
// });

console.log('--- Forms ✅ ---');

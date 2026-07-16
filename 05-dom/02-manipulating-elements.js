// ============================================
// 02 - Manipulating Elements
// ============================================

const para = document.getElementById('para');

// --- textContent vs innerHTML ---
// textContent: only text, safe (no HTML parsing)
// innerHTML: parses HTML tags — use carefully (XSS risk!)

console.log('Original text:', para.textContent);

// Change text
para.textContent = 'DOM is amazing! 🚀';

// innerHTML example (adds bold tag)
// para.innerHTML = '<strong>Bold text via innerHTML</strong>';

// --- classList ---
para.classList.add('highlight');        // add class
para.classList.remove('highlight');     // remove class
para.classList.toggle('active');        // toggle (add if not present, remove if present)
console.log('Has class active:', para.classList.contains('active'));

// --- style (inline CSS) ---
para.style.color = 'teal';
para.style.fontSize = '18px';
para.style.fontWeight = 'bold';

console.log('--- Manipulating Elements ✅ ---');

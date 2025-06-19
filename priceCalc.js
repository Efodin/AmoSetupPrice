const total = document.getElementById('calcSum');

sum = 0;

const animation = (from, to, duration = 300) => {
  const start = performance.now();

  const update = currentTime => {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(from + (to - from) * progress)
  
    total.textContent = value;

    progress < 1 ? requestAnimationFrame(update) : 0;
  }

  requestAnimationFrame(update);
}

function initCalculator() {
  const checkbox = document.querySelectorAll('.checkbox__input');

  checkbox.forEach(item => {
  item.addEventListener('change', () => {
    const value = +item.value;
    const newSum = item.checked ? sum + value : sum - value;
  
    animation(sum, newSum);
    sum = newSum;
    });
  });
}





const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const blokes = document.querySelectorAll('.bloke1, .bloke2, .bloke3, .bloke4, .bloke5, .bloke6');
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 30000)
  }

  function whack(e) {
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  blokes.forEach(bloke1 => bloke1.addEventListener('click', whack));
  blokes.forEach(bloke2 => bloke2.addEventListener('click', whack));
  blokes.forEach(bloke3 => bloke3.addEventListener('click', whack));
  blokes.forEach(bloke4 => bloke4.addEventListener('click', whack));
  blokes.forEach(bloke5 => bloke5.addEventListener('click', whack));
  blokes.forEach(bloke6 => bloke6.addEventListener('click', whack));
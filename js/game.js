const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer')

const createElement = (tag, className) => {

  const element = document.createElement(tag);
  element.className = className;
  return element;

}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {

  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length == 20) {

    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de ${timer.innerHTML}!`);

  }

}

const checkCards = () => {

  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter == secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {

    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);

  }

}

const revealCard = ({ target: { parentNode } }) => {

  if (parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard == '') {

    parentNode.classList.add('reveal-card');
    firstCard = parentNode;

  } else if (secondCard == '') {

    parentNode.classList.add('reveal-card');
    secondCard = parentNode;

    checkCards();

  }

}

const createCard = (id) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  /*url das imgs de cada personagem da api*/
  front.style.backgroundImage = `url(https://rickandmortyapi.com/api/character/avatar/${id}.jpeg)`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', id);

  return card;

}

const loadGame = async () => {

  const charactersIds = await getIds();

  if (charactersIds == 0) {
    //tratar erro da api
    return console.log("problemas pra pegar os ids da api");

  }

  const duplicateCharacters = [...charactersIds, ...charactersIds];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

  //varrendo/mapeando meu array
  shuffledArray.forEach(id => {

    const card = createCard(id);
    grid.appendChild(card);

  });

}

const startTime = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime +1;
  }, 1000);

}

window.onload = () => {

  spanPlayer.innerHTML = localStorage.getItem('player');
  startTime();
  loadGame();
}

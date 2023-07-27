const grid = document.querySelector('.grid');

const characters = [1,2,3,4,5];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  /*url das imgs de cada personagem da api*/
  front.style.backgroundImage = `url(https://rickandmortyapi.com/api/character/avatar/${character}.jpeg)`;

  card.appendChild(front);
  card.appendChild(back);

  return card;

}

const loadGame = () => {

  characters.forEach((character) => {

    const card = createCard(character);
    grid.appendChild(card);

  });

}

loadGame();
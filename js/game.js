const grid = document.querySelector('.grid');

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCard = (id) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  /*url das imgs de cada personagem da api*/
  front.style.backgroundImage = `url(https://rickandmortyapi.com/api/character/avatar/${id}.jpeg)`;

  card.appendChild(front);
  card.appendChild(back);

  return card;

}

const loadGame = async () => {

  const charactersIds = await getIds();

  if(charactersIds == 0) {
    //tratar erro da api
    return console.log("problemas pra pegar os ids da api");
  }

  const duplicateCharacters = [ ... charactersIds, ...charactersIds];

  const shuffledArray = duplicateCharacters.sort()

  //varrendo/mapeando meu array
  duplicateCharacters.forEach(id => {
    const card = createCard(id);
    grid.appendChild(card);

  });

}

loadGame();
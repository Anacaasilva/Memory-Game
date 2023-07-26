const input =  document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }
  button.setAttribute('disabled', '');
}

// Ter acesso aos dados inseridos no input
// const validateInput = (event) => {
//   console.log(event.target.value);
// }

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(input.value);

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';

  // localStorage.setItem('player', 'input.value')
}

input.addEventListener('input', validateInput);
input.addEventListener('submit', handleSubmit);
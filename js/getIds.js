const getRandomNumber = (min, max) => {
  const random = Math.random();
  const randomNumber = min + Math.floor(random * (max - min + 1));
  return randomNumber;
}

const getIds = async () => {
  try {
    //fazendo a request
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const val = await response.json()

    //abstraindo quantia de personagens da api na constante quantity
    const quantity = val.info.count;

    //criando array de ids
    let result = [];

    //fazendo um laço pra gerar as cartas pro jogo
    for (let i = 0; result.length < 10; i++) {

      //chamando funcao que gera numero aleatorio entre 1 e X 
      let randomId = getRandomNumber(1, quantity)

      //validando se o numero ja existe ou nao no array
      if (result.indexOf(randomId) == -1) {
        //adiiconando novo numero no array
        result.push(randomId);
      }
    }
    return result;
  } catch (err) {
    console.log(err);
    return 0;
  }
}

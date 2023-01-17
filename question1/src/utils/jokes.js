const JOKES = [
  {
    "id": 1,
    "question": "Why are modern programming languages so materialistic?",
    "answer": "Because they are object-oriented.",
    "category": "Programming"
  }
  ,
  {"id": 2,
    "question": "What's the object-oriented way to become wealthy?",
    "answer": "Inheritance.",
    "category": "Programming"
  }
  ,
  {
    "id": 3,
    "question": "What did the fish say when it swam into the wall?",
    "answer": "Dam.",
    "category": "Pun"
  }
  ,
  {
    "id": 4,
    "question": "How much did your chimney cost?",
    "answer": "Nothing, it was on the house.",
    "category": "Pun"
  }
  ,
  {
    "id": 5,
    "question": "Who is Santa's favourite singer?",
    "answer": "Elf-is Presley!",
    "category": "Christmas"
  }
  ,
  {
    "id": 6,
    "question": "What's Santa's favourite type of music?",
    "answer": "Wrap!",
    "category": "Christmas"
  }
]

let joke;

const JOKE = '';


const getJokeCategory = (category) => {
  for (const i in JOKES) {
    if (category === JOKES[i].category) {
      return JOKES[i];
    }
  }

};
/** 
const getIdPlace = (id) => {
  const idAsNumber = parseInt(id, 10);

  const indexOfPlaceFound = PHOTOS.findIndex((photo) => photo.id === idAsNumber);
  if (indexOfPlaceFound < 0 || indexOfPlaceFound >= PHOTOS.length) return undefined;

  return PHOTOS[indexOfPlaceFound];
};
*/
const getJoke = () => {
  joke = localStorage.getItem(JOKE);

  if (joke === undefined) return;

  return joke;

};


const setJoke = (theJoke) => {
  localStorage.setItem(JOKE, theJoke);
};


const isJoke = () => joke !== undefined;

const clearJoke = () => {
  localStorage.removeItem(JOKE);
  joke = undefined;
};

export { getJoke, setJoke, isJoke, clearJoke, getJokeCategory };


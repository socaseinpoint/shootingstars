import getRandom from './getRandom';

function getColor() {
  const n = getRandom(1, 3);

  switch (n) {
    default:
      return 'white';
    case 1:
      return 'red';
    case 2:
      return 'yellow';
    case 3:
      return 'blue';
  }
}

export default getColor;

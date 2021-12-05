const arrayWithZeros = [false, 1, 0, 2, 0, 1, 3, "a"];

const moveZeros = (array) => {
  let arrayWithoutZeros = [].push;
  let arrayOfZeros = [];
  array.forEach((valor, index) => {
    valor == 0
      ? arrayOfZeros.push(array[index])
      : arrayWithoutZeros.push(array[index]);
  });

  return arrayWithoutZeros.concat(arrayOfZeros);
};

const moveZerosTwoPointOh = (array) => array.filter((i) => (i !== 0 ? 1 : 0));

console.log(moveZerosTwoPointOh(arrayWithZeros));

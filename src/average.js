const average = (array) => {
  const tamanhoArray = array.length;
  if (tamanhoArray === 0) {
    return undefined;
  }
  for (let i in array) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
  }
  const media = array.reduce((a, v) => a + v, 0) / array.length;
  
  return Math.round(media);
};
console.log(average([2, 2]));

module.exports = average;

function customShuffle(arr) {
  const result = [];
  const copy = arr.slice();

  while (copy.length > 0) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(randomIndex, 1)[0]);
  }

  return result;
}

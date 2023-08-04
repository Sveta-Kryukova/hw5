function getArrayIntersection(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  return result;
}

function getArrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
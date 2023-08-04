function measureArrayPerformance(fn, arr) {
  const start = Date.now();
  fn(arr);
  const end = Date.now();
  return end - start;
}
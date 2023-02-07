function solution(sequence) {
  let removed = false;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      if (removed) {
        return false;
      }
      removed = true;
      if (i > 0 && sequence[i - 1] >= sequence[i + 1]) {
        sequence[i + 1] = sequence[i];
      }
    }
  }
  return true;
}

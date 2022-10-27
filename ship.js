const Ship = (length) => {
  let hitCount = 0;
  const hit = () => hitCount++;
  const isSunk = () => {
    if (hitCount === length) return true;
    else return false;
  };
  return { length, hit, isSunk };
};

const Ship = (name, length) => {
  let hitCount = 0;
  const hit = () => ++hitCount;

  const isSunk = () => {
    if (hitCount === length) return true;
    else return false;
  };
  return { name, length, hit, isSunk };
};

export { Ship };

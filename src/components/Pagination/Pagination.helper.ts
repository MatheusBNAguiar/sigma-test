type PageSequence = Array<number | string>;

const generateLowerBound = (position = 1, range = 1): PageSequence => {
  const maxRange = position - range;
  const lowerBound: PageSequence = [];
  if (position !== 1) {
    lowerBound.push(1);
  }
  if (maxRange > 1) {
    lowerBound.push('...');
  }
  for (let index = range; index > 0; index -= 1) {
    const newPosition = position - index;
    if (newPosition > 1) {
      lowerBound.push(newPosition);
    }
  }
  return lowerBound;
};

const generateUpperBound = (position = 1, range = 1, max = 1): PageSequence => {
  const maxRange = position + range;
  const upperBound: PageSequence = [];
  for (let index = 1; index <= range; index += 1) {
    const newPosition = position + index;
    if (newPosition < max) {
      upperBound.push(newPosition);
    }
  }
  if (maxRange < max) {
    upperBound.push('...');
  }
  if (position !== max) {
    upperBound.push(max);
  }
  return upperBound;
};

export function buildPagesSequence(position, range, max) {
  return generateLowerBound(position, range).concat(position).concat(generateUpperBound(position, range, max));
}

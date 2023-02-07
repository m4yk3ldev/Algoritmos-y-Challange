// https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
/**
 * @param {{x:number, y:number }[]} objects
 */
function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  return count;
}

const testArray = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

console.log(getCount(testArray));

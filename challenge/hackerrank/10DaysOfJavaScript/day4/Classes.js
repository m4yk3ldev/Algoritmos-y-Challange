class Polygon {
  constructor(points) {
    this.points = points;
  }
  perimeter = () => {
    let perimeter = 0;
    this.points.forEach((point) => {
      perimeter += point;
    });
    return perimeter;
  };
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());

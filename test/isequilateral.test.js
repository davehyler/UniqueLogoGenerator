const {Triangle} = require('../generatelogo.js');

describe('generateSVG', () => {
  test('verifyTriangleIsEquilateral', () => {
    const shape = Triangle;
    expect(shape.render()).toEqual('<polygon points="0, 260 150, 0 300, 260"');
  });
});

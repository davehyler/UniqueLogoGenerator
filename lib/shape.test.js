const Shape = require('./shape.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

describe('Shapes', () => 
{
  //REQUIRED EXAMPLE TEST FROM README
  describe('RenderTriangle', () => 
  {
    it('should ensure the Triangle meets the defined points of the SVG generator', () => 
    {
      const shape = new Triangle();
      shape.setColor("green");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });
  });
  //ADDITIONAL TESTS TO ENSURE ALL SHAPES WORK (identical to readme's only jest test requirement, sans shape)
    describe('RenderCircle', () => 
    {
      it('should ensure the Circle meets the defined points of the SVG generator', () => 
      {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<circle r="85" cx="150" cy="110" fill="red" />`);
      });
    });
    describe('RenderSquare', () => 
    {
      it('should ensure the Square meets the defined points of the SVG generator', () => 
      {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<rect width="150" height="150" x="75" y="30" fill="green" />`);
      });
  });
});
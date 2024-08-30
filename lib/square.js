const Shape = require('./shape.js');

class Square extends Shape 
{
    constructor(logoColor, logoText, logoTextColor) 
    {
        super(logoColor, logoText, logoTextColor);
    }
    render() 
    {
        let output = `<rect width="150" height="150" x="75" y="30" fill="${this.logoColor}" />`;
        if (this.logoText != `` && this.logoText != null) 
        {
            output += `<text text-anchor="middle" fill="${this.logoTextColor}" font-size="60px" stroke-width="1px" x="150px" y="125px"> ${this.logoText} </text>`;
        }
        return output;
    }
}

module.exports = Square;
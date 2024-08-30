const Shape = require('./shape.js');

class Triangle extends Shape 
{
    constructor(logoColor, logoText, logoTextColor) 
    {
        super(logoColor, logoText, logoTextColor);
    }
    render() 
    {
        let output = `<polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />`;
        if (this.logoText != `` && this.logoText != null) 
        {
            output += `<text text-anchor="middle" fill="${this.logoTextColor}" font-size="45px" stroke-width="1px" x="150px" y="145px"> ${this.logoText} </text>`;
        }
        return output;
    }
}

module.exports = Triangle;
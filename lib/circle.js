const Shape = require('./shape.js');

class Circle extends Shape 
{
    constructor(logoColor, logoText, logoTextColor) 
    {
        super(logoColor, logoText, logoTextColor);
    }
    render() 
    {
        let circleInfo = `<circle r="85" cx="150" cy="110" fill="${this.logoColor}" />`;
        if (this.text != `` && this.logoText != null) 
        {
            circleInfo += `<text text-anchor="middle" fill="${this.logoTextColor}" font-size="60px" stroke-width="1px" x="150px" y="130px"> ${this.logoText} </text>`;
        }
        return circleInfo;
    }
}

module.exports = Circle;
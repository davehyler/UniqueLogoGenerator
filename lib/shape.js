//ToDo: "shapes.js Exports `Triangle`, `Circle`, and `Square` classes"
class Shape 
{
    constructor(logoColor, logoText, logoTextColor) //copy format from week 6 unit 8 for "constructor" information and the "this" property
    {
        this.logoColor = logoColor,
        this.logoText = logoText;
        this.logoTextColor = logoTextColor;
    }
    setColor(logoColor) 
    {
        return this.logoColor = logoColor;
    }
}
module.exports = Shape;
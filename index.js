const inquirer = require('inquirer');
const fs = require('fs');
//Added new imports for resubmission (worked just fine without them... but was downgraded for not having them separate...)
// const path = require('path'); //no longer needed
// const Shape = require('./lib/shape.js'); //still required but only needs to be imported by the circle/triangle/square js files (and TEST)
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle.js');
//Removed much more concise, simple and efficient if statement below because apparently they need to be their own class to create an SVG shape and the shape cannot be a variable within a single statement for reasons.
//See new JS files in the requested "lib" folder for individual shapes now:
// function generateSVG(data) {
//   let shape;
//   if (data.logoShape == 'Circle') {
//       shape = '<circle cx="150" cy="100" r="80"'};
//   if (data.logoShape == 'Triangle') {
//       shape = '<polygon points="75, 150 150, 20 225, 150"'};
//   if (data.logoShape == 'Square') {
//     shape = '<rect x="50" y="0" width="200" height="200"'};
// const svgContent = `
//     <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
//     ${shape} fill="${data.logoShapeColor}" />
//     <text x="150" y="110" font-size="42" text-anchor="middle" fill="${data.logoTextColor}">${data.logoText}</text>
//     </svg>`;
//   return svgContent;
// }
// generateSVG.prototype.verifyTriangleIsEquilateral = () => {
//     render(); 
//     {return '<polygon points="75, 150 150, 20 225, 150"';}
//     };
inquirer.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'What is the 3 Character (or less) Text you would like to use for your Logo?',
      validate: input => input.length <= 3 || 'Please do not go over the 3 Character Limit'
    },
    {
      type: 'input',
      name: 'logoTextColor',
      message: 'What color would you like those 3 Characters to be?',
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'What shape would you like your logo to be?',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'logoColor',
      message: 'What color would you like your shape to be?',
    }
  //remove "response" and replace with "(data)" in order to pass through values from separate files and classes (wasn't needed when it was contained within the IF statement further convoluting a formerly simple task)
  // ]).then(response => {
  ]).then((data) => 
  {
    // const svg = generateSVG(response); //REMOVED working code
    // fs.writeFileSync(path.join('logo.svg'), svg); //path import no longer needed
    // console.log('Logo.SVG Generated Successfully');
    let shapeInformation;
    if (data.logoShape == 'Circle') 
    {
      shapeInformation = new Circle(data.logoColor, data.logoText, data.logoTextColor);
    } 
    else if (data.logoShape == 'Triangle') 
    {
      shapeInformation = new Triangle(data.logoColor, data.logoText, data.logoTextColor);
    } 
    else 
    {
      shapeInformation = new Square(data.logoColor, data.logoText, data.logoTextColor);
    }
    const newFile = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeInformation.render()}</svg>`
    fs.writeFile('logo.svg', newFile, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg') //CHANGE ORIGINAL TO REQUIRED TEXT FROM README
    );
});
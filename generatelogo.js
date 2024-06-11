const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

function generateSVG(data) {
  let shape;
  if (data.logoShape == 'Circle') {
      shape = '<circle cx="150" cy="100" r="80"'};
  if (data.logoShape == 'Triangle') {
      shape = '<polygon points="75, 150 150, 20 225, 150"'};
  if (data.logoShape == 'Square') {
    shape = '<rect x="50" y="0" width="200" height="200"'};
const svgContent = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${shape} fill="${data.logoShapeColor}" />
    <text x="150" y="110" font-size="42" text-anchor="middle" fill="${data.logoTextColor}">${data.logoText}</text>
    </svg>`;
  return svgContent;
}
generateSVG.prototype.verifyTriangleIsEquilateral = () => {
    render(); 
    {return '<polygon points="75, 150 150, 20 225, 150"';}
    };
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
      name: 'logoShapeColor',
      message: 'What color would you like your shape to be?',
    }
  ]).then(response => {
    const svg = generateSVG(response);
    fs.writeFileSync(path.join('logo.svg'), svg);
    console.log('Logo.SVG Generated Successfully');
})
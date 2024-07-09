const fs = require('fs');
const path = require('path');

// Folder containing SVG files
const svgFolder = './Flags SVGs';
// Name of the JS file to be created
const jsFileName = 'flagsvgs.js';

// Function to get the country code from the file name
const getCountryCode = (fileName) => {
  const match = fileName.match(/^flag-([a-z]{2})-svgrepo-com\.svg$/);
  return match ? match[1] : null;
};

// Function to clean the SVG content
const cleanSVGContent = (content) => {
  // Remove XML declaration and comments
  content = content.replace('<svg width=\"800px\" height=\"800px\" viewBox=\"0 -4 28 28\" fill=\"none\">', '');
  content = content.replace("\r\n</svg>", '');

  // Remove xmlns attribute from <svg> tag
  content = content.replace(' xmlns="http://www.w3.org/2000/svg"', '');

  // Remove any other unnecessary XML namespaces and attributes if needed
  content = content.replace('<?xml version=\"1.0\" encoding=\"utf-8\"?>\n\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n', '');
  // content = content.replace(/\s+xmlns:.*?=".*?"/g, '');

  return content.trim();
};

// Initialize the flags object
const flags = {};

// Read the SVG folder
fs.readdir(svgFolder, (err, files) => {
  if (err) {
    console.error('Error reading the SVG folder:', err);
    return;
  }

  // Process each SVG file
  files.forEach((file) => {
    const countryCode = getCountryCode(file);
    if (countryCode) {
      const filePath = path.join(svgFolder, file);
      let svgContent = fs.readFileSync(filePath, 'utf8');
      svgContent = cleanSVGContent(svgContent);
      flags[countryCode] = svgContent;
    }
  });

  // Convert the object to a JavaScript variable assignment
  const jsContent = `const flags = ${JSON.stringify(flags, null, 2)};\n\nexport default flags;`;

  // Write the content to the JS file
  fs.writeFile(jsFileName, jsContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the JS file:', err);
      return;
    }

    console.log(`File ${jsFileName} has been created successfully.`);
  });
});

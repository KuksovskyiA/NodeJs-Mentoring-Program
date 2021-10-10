const csv = require('csvtojson');
const fs = require('fs');
const inputPath = './csv/inputData.csv';
const outputPath = './csv/outputData.txt';
const readableStream = fs.createReadStream(inputPath);
const writableStream = fs.createWriteStream(outputPath);

readableStream.on('error', (err) => {
  console.error(`Error occurred while reading data from ${inputPath}`, err);
  process.exit(0);
});
  
writableStream.on('error', (err) => {
  console.error(`Error occurred while writing data to ${outputPath}`, err);
  process.exit(0);
});
  
readableStream.pipe(csv()).pipe(writableStream);
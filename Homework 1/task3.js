const stdin = process.stdin;
const stdout = process.stdout;

stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }

  stdout.write(`${key.split('').reverse().join('')}\n`);
});




import csv from 'csvtojson';
import fs from 'fs';
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
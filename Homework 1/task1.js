const stdin = process.stdin;
const stdout = process.stdout;

stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }

  stdout.write(`${key.split('').reverse().join('')}\n`);
});
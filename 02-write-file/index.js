const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;
const ws = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

stdout.write('Hello! Enter your text here:\n');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') process.exit();
  ws.write(data);
});
process.on('exit', () => {
  stdout.write('\n Thanks! Bye!\n');
});
process.on('SIGINT', () => process.exit());

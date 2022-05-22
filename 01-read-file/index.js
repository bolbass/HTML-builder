
const path = require('path');
const fs = require('fs');
const rs = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let data = '';
rs.on('data', (chunk) => {
    data += chunk.toString();
});
rs.on('end', () => {console.log(data)});
rs.on('error', (err) => console.log(err.message));
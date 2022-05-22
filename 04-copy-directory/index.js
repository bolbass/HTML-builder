const path = require('path');
const fs = require('fs/promises');

const dirIn = path.join(__dirname, 'files');
const dirOut = path.join(__dirname, 'files-copy');

(async () => {
  await fs.rm(dirOut, { 
      recursive: true, 
      force: true });
  await fs.mkdir(dirOut);

  let file_arr = await fs.readdir(dirIn, {withFileTypes: true });
    file_arr.forEach(async (file_item) => {
        if (file_item.isFile) {
            await fs.copyFile(path.join(dirIn, file_item.name), path.join(dirOut, file_item.name));
        }
    });
})();

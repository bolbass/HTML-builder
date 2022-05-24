const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname,'secret-folder' ), (err, file_arr) => {
  console.log('Name:'+'\t\t'+'Ext:'+'\t\t'+'Size:');
  file_arr.forEach(file_item =>{
    let path_file=path.join(__dirname, 'secret-folder', file_item.toString());
    fs.stat(path_file,(error,stats)=>{
        if(stats.isFile()){
            let {ext,name}=path.parse(path_file);
            let kb=Math.round((stats.size/1024));
            console.log(name+'\t\t'+ext+'\t\t'+kb+' KB');
      };
    });
  });
})
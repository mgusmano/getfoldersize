import getFolderSize from 'get-folder-size';

const myFolder = './node_modules';

const size = await getFolderSize.loose(myFolder);
console.log(`The folder is ${size} bytes large`);
console.log(`That is the same as ${(size / 1000 / 1000).toFixed(2)} MB`);
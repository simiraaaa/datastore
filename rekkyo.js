// ディレクトリ内のすべてのファイルパスを README.md に出力する

const URL = 'https://cdn.rawgit.com/simiraaaa/datastore/master/';
console.log('# データストア');
console.log('`' + URL + '`');
const fs = require('fs');
fs.readdir('.', function(err, files) {
  if (err) throw err;
  var dirs = files.filter(function(file) {
    return fs.statSync(file).isDirectory() && file !== '.git'; //絞り込み
  });
  dirs.map(d=>`./${d}`).forEach(rekkyo);
});

function rekkyo(dir) {
  console.log('## ' + dir);
  fs.readdir(dir, (err, files) => {
    files.map(d => `${dir}/${d}`).forEach(file => {
      const stat = fs.statSync(file);
      if (stat.isDirectory()) {
        rekkyo(file);
      }
      else if (stat.isFile()) {
        console.log('`' + file.replace('./', URL) + '`');
      }
    });
  });
}
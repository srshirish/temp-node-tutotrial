const {readFileSync,writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first, second);



writeFileSync('./content/result-sync.txt',`Here is the conent of both the files : ${first+second}`)
const third = readFileSync('./content/result-sync.txt','utf8');
console.log(third)
writeFileSync('./content/result-sync.txt',`overwritter`)
console.log("fsf"+third)
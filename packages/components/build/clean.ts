let fs = require('fs');
import { resolve, dirname } from 'path'

const targetLib = resolve(__dirname, '../lib')
const targetEs = resolve(__dirname, '../es')

// 要删除非空文件夹，需要先把文件夹里的文件删除，再删除空文件夹
function removeDir(path: string) {
  try {
    let data = fs.readdirSync(path); //data是一个数组，文件夹名和文件名用引号括起来，如["1", "2.txt", "3.html"]
    for (let i = 0; i < data.length; ++i) {
      //用循环判断数组中的元素是文件还是文件夹，是文件就删除，是文件夹就继续查找
      let url = path + "/" + data[i];
      let stat = fs.statSync(url); //用fs.stat获取文件或文件夹的详细信息
      if (stat.isDirectory()) {
        //用isDirectory判断元素是不是文件夹，是的话继续查找
        removeDir(url);
      } else {
        //不是文件夹的话，就是文件，删除文件
        fs.unlinkSync(url);
      }
    }
  } catch (error) {
    return
  }


  // 删除空文件夹
  fs.rmdirSync(path);
}

removeDir(targetLib) //调用
removeDir(targetEs)
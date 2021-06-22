/*
 * @Author: Runope
 * @Date: 2021-06-15 14:11:39
 * @LastEditors: Runope
 * @LastEditTime: 2021-06-17 10:39:02
 * @Description: file content
 * @contact: runope@qq.com
 */

// let primitiveTypes = ['string', 'number', 'null', 'undefined', 'boolean', 'symbol', 'bigint']

// console.log(!!null); // false
// console.log(!!undefined); // false

// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// let _thisIsUndefined
// const doNothing = (a) => {a=a*a}
// const someObj = {
//     a : 'ay',
//     b : 'bee',
//     c : 'see'
// }

// console.log(_thisIsUndefined); // undefined
// console.log(doNothing(2)); // undefined
// console.log(someObj["d"]); // undefined

// var fs = require('fs');
// fs.readFile('./tmp.js', (e,data) => {
//     console.log(e); // 当没有错误发生时，打印 null
//     if(e){
//       console.log(e);
//     }
//     console.log(data);
// });

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(false && 1 && []) // false
// console.log(" " && true && 5) // 5
// false && console.log('this is false SHORT') // dont print any
// true && console.log('this is true') // this is true
// true && console.log('this is true') && false && console.log('this is false SHORT') // this is true

// const router: Router = Router();

// router.get("/endpoint", (req: Request, res: Response) => {
//   let conMobile: PoolConnection;
//   try {
//     //do some db operations
//   } catch (e) {
//     if (conMobile) {
//       conMobile.release();
//     }
//   }
// });

// const router: Router = Router();

// router.get("/endpoint", (req: Request, res: Response) => {
//   let conMobile: PoolConnection;
//   try {
//     //do some db operations
//   } catch (e) {
//     conMobile && conMobile.release();
//   }
// });

// console.log(null || 1 || undefined); // 1

// function logName(name) {
//   var n = name || "Mark";
//   console.log(n);
// }

// logName(); // "Mark"

// console.log(typeof(+"45"))
// console.log(17/10)


const builds = {
    'hello1' : {
        entry: 'entry1',
        dest: 'dest1',
        format: 'format1',
        env: 'env1',
    },
    'world2' : {
        entry: 'entry2',
        dest: 'dest2',
        format: 'format2',
        env: 'env2',
    }
}

console.log(Object.keys(builds).map())



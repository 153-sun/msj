//引入mysql模块
const mysql=require('mysql');
//创建连接池对象,自动建立连接
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'msj',
  connectionLimit:20
});
module.exports=pool;

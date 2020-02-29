// 小明的代码


//通过闭包解决变量冲突

var moduleA = (function () {
  var obj = {};
  var name = "小明"
  var flag = true;

  if (flag) {
    console.log("小明 哈哈哈")
  }

  obj.flag = flag;
  return obj;
})()
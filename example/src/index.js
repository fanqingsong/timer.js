
// Accept hot module reloading during development
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}

const TimerClass = require("../../dist/timer.umd.js");

function DocWrite(str)
{
    console.log(str);

    var node=document.createElement("div");
    var textnode=document.createTextNode(str);
    node.appendChild(textnode);

    document.body.appendChild(node);
}

/* 未定时超时时间 */
var timer1 = new TimerClass(function(){
  DocWrite(this.getTimerID()+"-timer custom alarm -- 未定时超时时间");
});
timer1.start();
//timer1.stop();

/* 超时时间定制 */
var timer2 = new TimerClass(function(){
  DocWrite(this.getTimerID()+"-timer custom alarm -- 超时时间定制");
}, {timeout:4000});
timer2.start();

/* 循环执行 */
var timer3 = new TimerClass(function(){
  DocWrite(this.getTimerID()+"-timer custom alarm -- 循环执行");
}, {isInterval:true});
timer3.start();


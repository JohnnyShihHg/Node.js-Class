const helloapp=()=>{
    console.log('Hello Node.js');
}
module.exports.helloapp=helloapp;

module.exports={
    helloapp:helloapp,
    title:"Hello Node.js"
}//使用物件方法

module.exports={
    helloapp,
    title:"Hello Node.js"
}//Js物件更精簡 key跟 value相同
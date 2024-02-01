//设置图片切换
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/georgeOIP-C.jpg"){
        myImage.setAttribute("src","images/harrisonR-C.jpg");
    } else {
        myImage.setAttribute("src","images/georgeOIP-C.jpg");
    }
};

//设置个性化欢迎信息
//获取新按钮和标题的引用
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//个性化欢迎信息设置函数
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.innerHTML = "The Beatles 酷毙了." + myName;
    }
}

//初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem("name")) {//检测name数据是否存在
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "The Beatles 酷毙了." + storedName;
}

//为按钮设置onclick事件处理器
myButton.onclick = function (){
    setUserName();
};
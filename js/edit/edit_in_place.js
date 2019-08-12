/**
 * @function 就地编辑
 * @author 韩总
 * 网站的基础类 不要重复造轮子
 * 不是具体业务，抽象的公共业务
 */
function EditorInPlace(id,partent,initval){
    //constructor
    this.id = id;
    this.partentElement = partent;
    this.value = initval || "default value";
    this.createElement();  //动态DOM
    this.attachEvents();
}
EditorInPlace.prototype.attachEvents = function(){
    //挂在到页面上了？
    let self=this;
    this.staticElement.addEventListener('click',()=>{
        console.log(this);// this 被覆盖
        // 应用到对象怎么办？
        this.converToEdit();
    },false);
    this.fieldElement.addEventListener('keydown', (event) => {
        if(event.keyCode == 13){
            this.staticElement.innerHTML = this.fieldElement.value;
            this.converToText();
        }
    })  
}
EditorInPlace.prototype.createElement = function(){
    this.containnerElement = document.createElement('div');
    this.staticElement = document.createElement('span');
    this.staticElement.innerText = this.value;

    this.fieldElement = document.createElement('input');
    this.fieldElement.type = 'text';
    this.fieldElement.value = this.value
    // this.fieldElement.style.display = 'none'

    this.containnerElement.appendChild(this.fieldElement);
    this.containnerElement.appendChild(this.staticElement);
    this.partentElement.appendChild(this.containnerElement);
    //两个状态
    this.converToText();
}
EditorInPlace.prototype.converToText = function(){
    this.fieldElement.style.display = 'none';
    this.staticElement.style.display= 'inline';
    
}

EditorInPlace.prototype.converToEdit = function(){
    this.fieldElement.style.display='inline';
    this.staticElement.style.display = 'none';

}

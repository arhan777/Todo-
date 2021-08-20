document.addEventListener('DOMContentLoaded',init);

function init(){
attachEvents();
}

function attachEvents(){
document.addEventListener('keyup',function(event){
    if(event.keyCode==13){
        addItem();
    };
})
document.querySelector('#add-item').addEventListener('click',addItem);
document.querySelector('.in-task-wrapper').addEventListener('click',removeItem);
}
function removeItem(event){
if(event.target.tagName!=='LI')return;
document.querySelector('.com-task-wrapper').appendChild(event.target);
document.querySelector('.in-task-wrapper').removeChild(event.target);

}
function addItem(){
    const ul=document.querySelector('.in-task-wrapper');
    const input=document.querySelector('.input-todo > input').value;
    const li=document.createElement('li');
    const flag=validate(input.trim());
    if(flag.status==false){
        alert(flag.message);
        return;
    }
    li.innerHTML=input;
    ul.appendChild(li);


    document.querySelector('.input-todo > input').value="";
}

const validate=todoText=>{
    let result={
        status:true,
        message:""
    }
    if(todoText.trim().length==0){
        result.status=false;
        result.message="please fill the valid todo";
        return result;
    }
    let allTodos=document.querySelectorAll('.in-task-wrapper > li');
    allTodoArr=Array.prototype.slice.call(allTodos);
    allTodoArr.some(item=>{
        if(item.innerHTML==todoText){
            result.status=false;
            result.message="Duplicate value not accepted";
            return result;
        }

    })
    return result;
}

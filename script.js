function addtask(){
let task=document.getElementById("Input-task").value;
if(task===""){
    alert("Enter something!");
    return;
}
 let li=document.createElement("li");
 li.innerText=task;
 
 let btn=document.createElement("button");
 btn.innerText="Delete";

 btn.onclick= function(){
    li.remove();
 }
 li.appendChild(btn);
 document.getElementById("tasklist").appendChild(li);
 document.getElementById("Input-task").value="";
}
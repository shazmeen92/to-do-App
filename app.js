var lime = document.getElementById('list');

function addToDo(){
    var inp = document.getElementById('todo');
    var list = document.createElement('li');
    var text = document.createTextNode(inp.value);
    list.setAttribute('class','like');
    list.appendChild(text);
   

    var del = document.createElement('button');
    var deltex = document.createTextNode('Delete');
    del.setAttribute('class','btn');
    del.setAttribute('onclick','delBtn(this)');
    del.appendChild(deltex);
    list.appendChild(del);


    var edit = document.createElement('button');
    var editex = document.createTextNode('Edit');
    edit.setAttribute('class','btn');
    edit.setAttribute('onclick','editBtn(this)');
    edit.appendChild(editex);
    list.appendChild(edit);

    lime.appendChild(list);
     
    inp.value = "";
    

}

function delBtn(e){
   e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = " ";
}

function editBtn(e){
  var val = e.parentNode.firstChild.nodeValue;
  var editVal = prompt("Enter edited value",val);
  e.parentNode.firstChild.nodeValue = editVal ; 
}
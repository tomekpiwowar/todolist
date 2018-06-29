document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if (value) {
    
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
});


document.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { 
    var value = document.getElementById('item').value;
    if (value) {
    
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
    }
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  
  parent.removeChild(item);
}

function completeItem () {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
  
  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function addItemTodo(text) {
  var list = document.getElementById('todo');
  
  var item = document.createElement('li');
  item.innerText = text;
  
  var buttons = document.createElement('div');
  buttons.classList.add('buttons')
  
  var remove = document.createElement('button'); 
  remove.classList.add('remove');
  
  remove.addEventListener('click', removeItem);
  
  var complete = document.createElement('button');
  complete.classList.add('complete');
  
  complete.addEventListener('click', completeItem);
  
  var removeIcon = document.createElement('i');
  removeIcon.classList.add('far','fa-trash-alt')
  
  var completeIcon = document.createElement('i');
  completeIcon.classList.add('fas','fa-check')
  
  list.appendChild(item);
  item.appendChild(buttons);
  buttons.appendChild(remove);
  remove.appendChild(removeIcon);
  buttons.appendChild(complete);
  complete.appendChild(completeIcon);
  
  list.insertBefore(item, list.childNodes[0]);
}
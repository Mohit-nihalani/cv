var list = document.getElementById('todo');
var addBtn = document.getElementById('additems');
var idText = document.getElementById('idText');
var updateItems = document.getElementById('updateItems');
var removeItems = document.getElementById('removeItems');
updateItems.addEventListener('click',function(){
   
    if(idText.value.length>0 )
    {
        firstElement = list.firstElementChild;
    var newListItem = createNewNode();
    list.replaceChild(newListItem,firstElement);
    }
    else
    {
        alert('Input Null');
    }
});


function createNewNode(){
    var newListItem = document.createElement('li');
        var textNode = document.createTextNode(idText.value.toUpperCase());
        newListItem.appendChild(textNode);

        return newListItem;
}

addBtn.addEventListener('click', function () {
    if (idText.value.length <= 0) {
        alert('Invalid List Item');
    }
    else {
        var newListItem = createNewNode();
        newListItem.id = "item " + (list.childElementCount + 1);
        list.appendChild(newListItem);
        
    }
});

removeItems.addEventListener('click',function(){
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement);
});

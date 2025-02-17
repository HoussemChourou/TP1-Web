let name=document.querySelector("#Jour");
let content=document.querySelector("#Content");
let btn=document.querySelector("#Button");
let list=document.querySelector("#list");

function addList(){
    let item=document.createElement("li");
    let del = document.createElement("button");
    del.className = "btn btn-danger m-2";
    del.innerHTML = '<i class="bi bi-trash"></i>';
    item.textContent=name.value + ":" + content.value + " "  ;
    item.appendChild(del);
    del.addEventListener("click", function() {
        item.remove();
    });
    list.appendChild(item);

}

btn.addEventListener("click",addList);
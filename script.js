var input=document.querySelector("input");
var button=document.querySelector("button");
var ul=document.querySelector("ol");

function addItems(){
	if(input.value.length>0)
	{
			var li=document.createElement("li");
			var btn=document.createElement("button");
			var spn=document.createElement("span");
			spn.appendChild(document.createTextNode(input.value));
			li.appendChild(spn);
			spn.classList.add("spn1");
			// btn.appendChild(document.createTextNode("Delete"));
			btn.classList.add("del");
			li.appendChild(btn);
			ul.appendChild(li);
			li.classList.add("list-group-item");
			li.classList.add("done");
			li.classList.toggle("done");
			li.addEventListener("click",function(){
			this.classList.toggle("done");
			})
			btn.addEventListener("click",function(){
			this.parentNode.remove();
			})
			input.value="";
			
	}
}
function addItemsEnter(prs)
{
	if(prs.which===13)
		addItems();
}
button.addEventListener("click",addItems);
input.addEventListener("keypress",addItemsEnter);


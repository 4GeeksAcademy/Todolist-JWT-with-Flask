const toDoItems = document.getElementsByClassName
("To-do items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById('trash');

input.addEventListener("keydown", function(event){
	if(event.key === "Enter")
		addItem();
})

function addItem(){
	var divParent = document.createElement("div");
	var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");


    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>'


    checkIcon.className = <FontAwesomeIcon icon="fa-solid fa-check" />
    checkIcon.style.color = "lightgray"
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })

    trashIcon.className = <FontAwesomeIcon icon="fa-solid fa-trash" />;
    trashIcon.style.color = "darkgrey";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent)

    input.value = '';
}







    export default Home;
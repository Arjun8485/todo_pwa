function showCross(selectedCross) {
    var cross = selectedCross.lastElementChild;
    cross.style.display = "block";
}

function hideCross(selectedCross) {
    var cross = selectedCross.lastElementChild;
    cross.style.display = "none";
}


function createItem() {
    var container = document.getElementById("main-container");
    var input = document.getElementById("userInput");
    container.innerHTML += `    
    <div class="flex items-center item" onmouseover="showCross(this)" onmouseout="hideCross(this)">
    <div class="w-6 h-6 m-4 rounded-full border-black border-solid border-2 hover:border-purple-400" onclick="taskCompleted(this)">
      <img src="images/icon-check.svg" alt="" class="mx-auto my-1.5">
    </div>
    <h2>${input.value}</h2>
    <img src="images/icon-cross.svg" alt="" class="ml-auto mr-6 hidden"  onclick="deleteItem(this)">
  </div>
  `;
    input.value = "";
    itemLeft();
}

function deleteItem(elementToBeDeleted) {
    elementToBeDeleted.parentElement.remove();
    itemLeft();
}


function taskCompleted(completedTask) {
    completedTask.classList.toggle("bg-purple-400");
    completedTask.classList.toggle("border-purple-400");

    completedTask.nextElementSibling.classList.toggle("line-through");
    itemLeft()
}

function itemLeft() {
    var itemsLeft = document.getElementById("itemsLeft");
    var itemCount = document.getElementById("main-container").childElementCount +1;
    var container = document.getElementById("main-container");
    var i;
    var x = container.getElementsByClassName("bg-purple-400").length;
    for (i = 0; i < itemCount; i++) {
    itemsLeft.innerText = `Taskse left: ${i-x}`;
    };
}

function showOnlyActive() {
    
}
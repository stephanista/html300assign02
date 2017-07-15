 console.log("heya");

tasks = [];



 function addTask() {
   event.preventDefault();
   var newtaskname = document.userTaskAdd.taskName.value;
   var newtaskmaster = document.querySelector('input[name="taskymaster"]:checked').value;
   var newtasklevel = document.userTaskAdd.diff.value;
   newtaskfull = [newtaskname, newtaskmaster, newtasklevel]
   tasks.push(newtaskfull);
   var taskList = "";
   for (var i = 0, task; task = tasks[i]; i++) {
     taskList += "<li>" + task + "</li>";
    }
   document.getElementById("tasks").innerHTML = taskList;
   console.log("Oh, you added.. '" + newtaskfull + "'. Awesome!")

 }

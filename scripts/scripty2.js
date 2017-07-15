 console.log("heya");

tasks = [];
names = [];
masters = [];
diffs = [];

 function addTask() {
   event.preventDefault();
   var newtaskname = document.userTaskAdd.taskName.value;
   names.push(newtaskname);
   var newtaskmaster = document.querySelector('input[name="taskymaster"]:checked').value;
   masters.push(newtaskmaster);
   var newtasklevel = document.userTaskAdd.diff.value;
   newtaskfull = [newtaskname, newtaskmaster, newtasklevel]
   diffs.push(newtasklevel);
   var taskList = "";
   for (var i = 0, task; task = tasks[i]; i++) {
     taskList += "<li>" + task + "</li>";
    }
   document.getElementById("tasks").innerHTML = taskList;
   console.log("Oh, you added.. '" + newtaskfull + "'. Awesome!")
   console.log(tasks);
 }



 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);

 function drawChart() {
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'taskname');
   data.addColumn('string', 'taskmaster');
   data.addColumn('string', 'taskdiff');
   for(i = 0; i < names.length; i++)
     data.addRow([names[i], masters[i], diffs[i]]);

   // Set chart options
   var options = {'title':'Tasks to Do',
                  'width':400,
                  'height':300,
                   pieHole: 0.4,};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }

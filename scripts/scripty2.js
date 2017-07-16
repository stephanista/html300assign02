
tasks = [];
names = [];
masters = [];
diffs = [];

mastercount ={};



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  for(var i = 0; i< masters.length; i++) {
      var num = masters[i];
      mastercount[num] = mastercount[num] ? mastercount[num]+1 : 1;
  }
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'taskmaster');
  data.addColumn('number', 'taskdiff');
  data.addRow(["Stephanista", mastercount.Stephanista])
  data.addRow(["Nylet", mastercount.Nylet]);
  data.addRow(["Yana", mastercount.Yana]);;
   // Set chart options
   var options = {'title':'Task % by Performer',
                  'width':400,
                  'height':300,
                   pieHole: 0.4,};

   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
 }

 function addTask() {
   event.preventDefault();
   var newtaskname = document.userTaskAdd.taskName.value;
   names.push(newtaskname);
   var newtaskmaster = document.querySelector('input[name="taskymaster"]:checked').value;
   masters.push(newtaskmaster);
   var newtasklevel = document.userTaskAdd.diff.value;
   var diffnumb = Number(newtasklevel);
   diffs.push(diffnumb);
   newtaskfull = [newtaskname, newtaskmaster, newtasklevel]
   tasks.push(newtaskfull);
   var taskList = "";
   for (var i = 0, task; task = tasks[i]; i++) {
     taskList += "<li>" + task + "</li>";
    }
   document.getElementById("tasks").innerHTML = taskList;
   console.log("Oh, you added.. '" + newtaskfull + "'. Awesome!")
   console.log(tasks);
   drawChart();
 }

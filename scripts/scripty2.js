tasks = [];
names = [];
masters = [];
diffs = [];

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function arrNum(array, performer) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] === performer) {
          count++;
      }
  }
  return count;
}

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'taskmaster');
  data.addColumn('number', 'tasknum');
  data.addRow(["Stephanista", arrNum(masters, 'Stephanista')]);
  data.addRow(["Nylet", arrNum(masters, 'Nylet')]);
  data.addRow(["Yana", arrNum(masters, 'Yana')]);;
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
  drawChart();
}

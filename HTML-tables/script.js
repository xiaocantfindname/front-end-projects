//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}
document.getElementById("button").disabled = true;
document.getElementById("button").style.backgroundColor = "gray";
Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
function chooseStudent(status){
  if(status.checked == true){
    status.parentNode.parentNode.style.backgroundColor = "orange";
    var delbutton = status.parentNode.parentNode.cells[8];
    delbutton.style.display = "table-cell";
  }
  else{
    status.parentNode.parentNode.style.backgroundColor = "white";
    var delbutton = status.parentNode.parentNode.cells[8];
    delbutton.style.display = "none";
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "gray";
  }
  var chose = document.getElementsByTagName("input");
    var flag = 0;
    for(i=0; i<chose.length; i++){
      if(chose[i].checked && flag == 0){
        document.getElementById("button").disabled = false;
        document.getElementById("button").style.backgroundColor = "orange";
        flag = 1;
      }
    }
}


function deleteStudent(stat){
  var tableRow = stat.parentNode.parentNode;
  var table = tableRow.parentNode;
  table.removeChild(tableRow);
}

function showDetail(stat){
  var tableRow = stat.parentNode.parentNode;
  var hiddenRow = document.getElementById("myTable").rows[tableRow.rowIndex+1];
  if(hiddenRow.style.display == "none"){
    hiddenRow.style.display = "table-row";
  } else {
    hiddenRow.style.display = "none";
  }
}

function addStudent(){
  var tableRow = document.createElement('tr');
  var checkBox = document.createElement('input');
  checkBox.setAttribute("type","checkbox");
  var cell = document.createElement('td');
  var cellImg = document.createElement('img');
  cellImg.src = "down.png";
  cellImg.style.width = "25px";
  cell.appendChild(checkBox);
  var old = cell.innerHTML;
  var newtext = '<br><br>';
  cell.innerHTML = old+newtext;
  cell.appendChild(cellImg);
  tableRow.appendChild(cell);
  var student = document.createElement('td');
  student.innerHTML = 'Student 4';
  var teacher = document.createElement('td');
  teacher.innerHTML = 'Teacher 4';
  var approve = document.createElement('td');
  approve.innerHTML = 'approved';
  var semester = document.createElement('td');
  semester.innerHTML = 'Fall';
  var TA = document.createElement('td');
  TA.innerText = 'TA';
  var budget = document.createElement('td');
  budget.innerText = '56789';
  var pc = document.createElement('td');
  pc.innerText = '100%';
  var delButton = document.createElement('button');
  delButton.style.display = 'block';
  delButton.innerHTML = 'Delete'
  var btnDt = document.createElement('td');
  btnDt.style.display = 'none';
  btnDt.appendChild(delButton);
  var detailRow = document.createElement('tr');
  detailRow.setAttribute('class', 'dropDownTextArea');
  var detailDt = document.createElement('td');
  detailDt.colSpan = 8;
  detailDt.innerHTML = 'Advisor:<br>Award Details<br><br>Summer 1-2014(TA)<br>Budget Number: <br>Tuition Number: <br><br>Comments:<br><br><br>Award Status:<br><br><br>';
  tableRow.appendChild(student);
  tableRow.appendChild(teacher);
  tableRow.appendChild(approve);
  tableRow.appendChild(semester);
  tableRow.appendChild(TA);
  tableRow.appendChild(budget);
  tableRow.appendChild(pc);
  tableRow.appendChild(btnDt);
  detailRow.appendChild(detailDt);
  document.getElementById('newStudent').appendChild(tableRow);
  document.getElementById('newStudent').appendChild(detailRow);
  checkBox.onclick = function(status){
    var findBox = status.path[0];
    if(findBox.checked == true){
      tableRow.style.backgroundColor = "orange";
      btnDt.style.display = "table-cell";
    }
    else{
      tableRow.style.backgroundColor = "white";
      btnDt.style.display = "none";
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.backgroundColor = "gray";
    }
    var chose = document.getElementsByTagName("input");
    var flag = 0;
    for(i=0; i<chose.length; i++){
      if(chose[i].checked && flag == 0){
        document.getElementById("button").disabled = false;
        document.getElementById("button").style.backgroundColor = "orange";
        flag = 1;
      }
    }
  }
  cellImg.onclick = function(){
    var hiddenRow = document.getElementById("myTable").rows[tableRow.rowIndex+1];
    if(hiddenRow.style.display == "none"){
      hiddenRow.style.display = "table-row";
    } else {
      hiddenRow.style.display = "none";
    }
  }
  delButton.onclick = function(){
    tableRow.remove();
  }
}
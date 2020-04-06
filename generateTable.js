function generateTable(x,y) {
    var body = document.getElementsByTagName("body")[0];
  
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i <= x; i++) {
      var row = document.createElement("tr");
  
      for (var j = 0; j <= y; j++) {
        if(i==0 && j==0){
            var cell = document.createElement("td");
            cell.setAttribute('id', 'th');
            var cellText = document.createTextNode("*");
            cell.appendChild(cellText);
            row.appendChild(cell);
          } 
        else if(i==0 && j<=x){
            var cell = document.createElement("td");
            cell.setAttribute('id', 'th');
            var cellText = document.createTextNode(j);
            cell.appendChild(cellText);
            row.appendChild(cell);
            }
          
        else if(j==0 && i<=y){
            var cell = document.createElement("td");
            cell.setAttribute('id', 'th');
            var cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
        else {
            var wynik = i*j;
            var cell = document.createElement("td");
            var cellText = document.createTextNode(wynik);
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "1");
  }

function getDataFromTable (){
    var table = document.getElementById("product-list");
    var data = [];
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        var checkbox = row.cells[3].querySelector('input[type="checkbox"]');
        if(checkbox.checked) {
            rowData = [];
            for (var j = 0; j < table.rows[i].cells.length - 1; j++) {
                rowData.push(table.rows[i].cells[j].innerHTML);
            }
            data.push(rowData);
        }
    }
    return data;
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModel(){
    document.getElementById("myModal").style.display = "none";
}
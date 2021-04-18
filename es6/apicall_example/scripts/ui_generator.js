var manufacturer = ['Apple', 'Oneplus', 'Samsung', 'Xiomee', 'Oppo', 'Vivo', 'Lenovo', 'Dell', 'HP'];
var categories = ['Mobile', 'Laptpot', 'Headphone', 'BT-Speaker', 'Wireless Earphonr'];


function onPageLoaded(){
    document.getElementById('manufacturerSelect').innerHTML = generateSelectOptions(manufacturer, 'manufacturer');
    document.getElementById('categorySelect').innerHTML =  generateSelectOptions(categories, 'categories');
}

function generateSelectOptions(dataSource, dataType){
    var htmlContent = `<select id="${dataType}">`;
    dataSource.forEach(element => {
        htmlContent += `<option value="${element}">${element}</option>`
    });
    htmlContent += `</select>`;
    return htmlContent;
}



function loadTable(dataSource, tableId){
    console.log(`Data source  : ${JSON.stringify(dataSource[0])}`);
    var keysList = Object.keys(dataSource[0]);
    console.log(`keys list : ${JSON.stringify(keysList)}`);
    var tableHtml = `<table class="table table-bordered table-striped table-responsive"> <thead class="table-dark">`;
    keysList.forEach(element => {
        tableHtml += `<th>${element.toUpperCase()}</th>`;
    });

    tableHtml += `<th > Actions</th>`;
    tableHtml += "</thead><tbody>";
    dataSource.forEach((value, key) => {
        var valuesKeys = Object.keys(value);
        tableHtml += `<tr class="bg-info" name="${value.CategoryName.toLowerCase()}" id="${value.CategoryName.toLowerCase()}">`;
        valuesKeys.forEach((data) => {
            tableHtml += `<td> ${value[data]}</td>`
        });

        tableHtml += `<td >
                        <div class="btn-group">
                          <button  class="btn btn-warning"  type="button" id="${value.ProductRowId}" value="Edit" onclick="{onEditClicked(this.id)}">Edit</button> 
                          <button  class="btn btn-danger" type="button" id="${value.ProductRowId}" value="Delete" onclick="{onDeleteClicked(this.id)}">Delete</button>
                        </div>
                       </td>`;

        tableHtml += `</tr>`;
    });

    tableHtml += "</tbody></table>";
    document.getElementById(tableId).innerHTML = tableHtml;
    addEventListener();
}

function addEventListener(){
            
    var tabledRows = document.getElementById('productsTable').getElementsByTagName('tr');
    for (let index = 0; index < tabledRows.length; index++) {
        const element = tabledRows[index];
        
        var className = element.id;
        console.log(`class name : ${className}`);
        element.addEventListener('mouseover', function(){
            if (element.id === 'electronics') {
                element.className = "bg-danger";
            }else if (element.id === 'electrical') {
                element.className = "bg-primary";
            }else if (element.id === 'furniture') {
                element.className = "bg-warning";
            }else if (element.id === 'food') {
                element.className = 'bg-secondary';
            }else if (element.id === 'mobile') {
                element.className = 'bg-light';
            }else if (element.id === 'laptpot') {
                element.className = 'bg-success';
            }else{
                element.className = 'bg-dark';
            }
        }, false);

        element.addEventListener('mouseout', function(){
            element.className = "bg-info";
        }, false);
    }

}
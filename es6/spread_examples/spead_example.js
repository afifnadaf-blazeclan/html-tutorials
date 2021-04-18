let categorySet = new Set();

let productsMap = new Map()

let categories = new Map();
categories.set(101, {id:101, name:"Mobile"});

let products = new Map();

let category = {
    id: 0,
    name : ""
}

var product = {
    id: 0,
    name : "",
    price: "",
    category: "", 
}

function productSaveClicked(){
    let prdId = document.getElementById('productId').value;

    if (products.has(parseInt(prdId))) {
        alert('Product already present');
    }else{

        let productName = document.getElementById('productName').value;
        let productPrice = document.getElementById('productPrice').value;
        let prdCatId = document.getElementById('productCategoryId').value;

        console.log(`Category id : ${prdCatId}`);
        
        if (categories.has(parseInt(prdCatId))) {
            var categoryData = categories.get(parseInt(prdCatId));

            var product = {
                id: parseInt(prdId),
                name : productName,
                price : productPrice,
                category : categoryData.name
            }

            var dataArray = productsMap.get(categoryData);
            
            productsMap.set(categoryData, {...dataArray,product});
            
            products.set(parseInt(prdId), product);
            
            loadTable(product,products, 'productTable');

        }else{
            alert('Category Id not present.');
        }
    }

    console.log(`Products data : ${JSON.stringify(products)}`);
}

function categorySaveClicked(){

    console.log(`Catgory Save Clicked`);
    let catId = document.getElementById('categoryId').value;
    let catName = document.getElementById('categoryName').value;

    var category = {
        id: catId,
        name : catName
    }

    if(category.has(parseInt(catId))){
        alert('Category Id already present');
    }else{
        var category = {
            id: catId,
            name : catName
        }
        categorySet.add(categorySet);
        categories.set(parseInt(catId), category);
        productsMap.set(categories.get(parseInt(catId)),[]);
        loadTable(category, categories, 'categoryTable');
    }

}


function loadTable(object , mapDataSource, tableId){
    var keysList = Object.keys(object);
    var tableHtml = `<table style="border: 1px solid; padding: 5px;"><thead>`;
    keysList.forEach(element => {
        tableHtml += `<td style="border: 1px solid; padding: 5px;">${element.toUpperCase()}</td>`;
    });

    tableHtml += "</thead><tbody>";
    mapDataSource.forEach((value, key) => {
        tableHtml += `<tr id="${key}">`;
        var valuesKeys = Object.keys(value);
        valuesKeys.forEach((data) => {
            tableHtml += `<td style="border: 1px solid; padding: 5px;"> ${value[data]}</td>`
        });

        tableHtml += `</tr>`;
    });

    tableHtml += "</tbody></table>";
    document.getElementById(tableId).innerHTML = tableHtml;
}

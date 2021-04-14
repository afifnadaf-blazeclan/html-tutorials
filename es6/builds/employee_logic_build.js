"use strict";

var product = [{
  product_id: "101",
  productName: "OnePlus 8",
  categoryName: "Mobile",
  manufacturer: "Oneplus",
  price: "40000"
}, {
  product_id: "102",
  productName: "S20 Pro",
  categoryName: "Mobile",
  manufacturer: "Samsung",
  price: "60000"
}, {
  product_id: "103",
  productName: "MI 10T",
  categoryName: "Mobile",
  manufacturer: "Xiomee",
  price: "35000"
}, {
  product_id: "104",
  productName: "MacBook Pro",
  categoryName: "Laptop",
  manufacturer: "Apple",
  price: "180000"
}, {
  product_id: "105",
  productName: "MacBook Air",
  categoryName: "Laptop",
  manufacturer: "Apple",
  price: "100000"
}, {
  product_id: "106",
  productName: "ThinkPad E-480",
  categoryName: "Laptop",
  manufacturer: "Lenovo",
  price: "50000"
}, {
  product_id: "107",
  productName: "JBL Speaker 360",
  categoryName: "BT Speaker",
  manufacturer: "JBL",
  price: "10000"
}, {
  product_id: "108",
  productName: "Resolve Plus 360",
  categoryName: "BT Speaker",
  manufacturer: "Bose",
  price: "180000"
}, {
  product_id: "109",
  productName: "Voltas 1.5 ton",
  categoryName: "AC",
  manufacturer: "Voltas",
  price: "30000"
}, {
  product_id: "110",
  productName: "Blue Start 1 ton",
  categoryName: "AC",
  manufacturer: "Blue Star",
  price: "35000"
}, {
  product_id: "111",
  productName: "OnePlus 8T",
  categoryName: "Mobile",
  manufacturer: "Oneplus",
  price: "45000"
}, {
  product_id: "112",
  productName: "S20 Pro",
  categoryName: "Mobile",
  manufacturer: "Samsung",
  price: "60000"
}, {
  product_id: "114",
  productName: "MacBook Pro",
  categoryName: "Laptop",
  manufacturer: "Apple",
  price: "180000"
}, {
  product_id: "116",
  productName: "ThinkPad E-480",
  categoryName: "Laptop",
  manufacturer: "Lenovo",
  price: "50000"
}, {
  product_id: "118",
  productName: "Resolve Plus 360",
  categoryName: "BT Speaker",
  manufacturer: "Bose",
  price: "180000"
}];

function loadAllProducts() {
  populateTable(product);
}

function removeDuplicates() {
  var uniqueProducts = [];
  product.forEach(function (element, i) {
    console.log("Products are : ".concat(JSON.stringify(element)));

    if (uniqueProducts.length > 0) {
      var present = uniqueProducts.find(function (unique) {
        return unique['productName'] === element['productName'];
      });

      if (!present) {
        uniqueProducts.push(element);
      }
    } else {
      uniqueProducts.push(element);
    }
  });
  console.log("Filtered Products are : ".concat(JSON.stringify(uniqueProducts)));
  populateTable(uniqueProducts);
}

function populateTable(dataSource) {
  var tableElement = document.getElementById('productsTable');
  console.log("Product : ".concat(JSON.stringify(dataSource[0])));
  var keys = Object.keys(JSON.parse(JSON.stringify(dataSource[0])));
  var tableHtml = "<table style=\"border: 1px solid; padding: 5px;\"><thead>";
  keys.forEach(function (key, i) {
    return tableHtml += "<td style=\"border: 1px solid; padding: 5px;\"> ".concat(key.toUpperCase(), "</td>");
  });
  dataSource.forEach(function (prd, i) {
    var prodKeys = Object.keys(prd);
    console.log("Product keys :  ".concat(JSON.stringify(prodKeys)));
    tableHtml += "<tr>";
    prodKeys.forEach(function (prdKey, i) {
      return tableHtml += "<td style=\"border: 1px solid; padding: 5px;\"> ".concat(prd[prdKey], "</td>");
    });
    tableHtml += "</tr>";
  });
  tableHtml += "</thead></table>";
  tableElement.innerHTML = tableHtml;
}

function searchDataBasedOnKey() {
  var searchKey = document.getElementById('searchKey').value;
  console.log("search key is : ".concat(searchKey));

  if (searchKey.length > 0) {
    var prdKeys = Object.keys(product[0]);
    console.log("Product keys : ".concat(prdKeys));
    var filteredProducts = [];
    product.forEach(function (element, i) {
      prdKeys.forEach(function (key, j) {
        if (element[key].toLowerCase().search(searchKey.toLowerCase()) >= 0) {
          filteredProducts.push(element);
          return;
        }
      });
    });

    if (filteredProducts.length > 0) {
      populateTable(filteredProducts);
    } else {
      document.getElementById('searchResult').innerText = "No matching result found.";
    }
  } else {
    populateTable(product);
  }
}

function onGroupBySelectionChanged(value) {
  console.log("Group by selection : ".concat(value));
  product.sort(function (first, second) {
    return first[value].localeCompare(second[value]);
  }); // var groupedData = groupArrayBy(product , value);
  // console.log(`grouped array : ${JSON.stringify(groupedData)}`)
  // console.log(`Products array : ${JSON.stringify(product)}`)

  populateTable(product);
}

function groupArrayBy(dataSource, value) {
  return dataSource.reduce(function (groupedArray, currProduct) {
    var key = currProduct[value];

    if (!groupedArray[key]) {
      groupedArray[key] = [];
    }

    groupedArray[key].push(currProduct);
    return groupedArray;
  });
}

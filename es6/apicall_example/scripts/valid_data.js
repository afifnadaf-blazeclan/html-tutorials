

class ProductInfo{

    constructor(){
       
        this.ProductId = "";
        this.ProductName = "";
        this.Description = "";
        this.BasePrice = 0;
        this.CategoryName = "";
        this.Manufactuer = "";
        this.ProductRowId = 0;        
    }

}


const handler = {
    set(target, property, value){
        if (property === "ProductName" && !value.match(/[a-zA-Z][0-9]/)) {
            console.log(`Invalid Product Name`)
            throw new Error('Invalid Product Name');
        }else if (property === 'BasePrice' && parseInt(value) < 0) {
            console.log(`Product price cannnot be negative`)
            throw new Error('Product price cannnot be negative');
        }else if (property === 'ProductId' && (!value.startsWith('Prd-') && !value.startsWith('PRD-'))) {
            console.log(`Product Id should start with "PRD-" `)
            throw new Error('Product Id should start with "Prd-" ');
        }else{
            target[property] = value;
            return true;
        }
    }
}

function validateData(product){
    const productInfo = new ProductInfo();
    const proxyObject = new Proxy(productInfo, handler);

    try{
        proxyObject.BasePrice = product.BasePrice;
        proxyObject.ProductId = product.ProductId;
        proxyObject.ProductName = product.ProductName;
        return true;
    }catch(e){
        console.log(`Error occured because of : ${e.message}`)
        document.getElementById('dataValidationMessage').innerText = e.message;
        return false
    }


}


function getNewRowId(tableData){
    tableData.sort((first, second) => first.ProductRowId > second.ProductRowId);
    var newRowId = tableData[tableData.length -1].ProductRowId;
    return (newRowId+1);
}
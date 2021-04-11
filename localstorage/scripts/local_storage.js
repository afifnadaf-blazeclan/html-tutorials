var ProductsLogic = function(){

    this.addNewProduct = function(product){
        
        console.log('Product Data', JSON.stringify(product));
        
        var keys = Object.keys(product);
        for (let index = 0; index < keys.length; index++) {
            const element = keys[index];
            if (product[element] == "") {
                alert('Please enter valid '+ element.toUpperCase() + ' value');
                break;
            }
        }

        var productID = this.generateUniqueKey();
        localStorage.setItem(productID, JSON.stringify(product));
    }



    this.generateUniqueKey = function(){
        var chars = "0123456789";
        var idLength = 4;
        var result = '';
        for (var i = idLength; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        result+= 'PROD';
        if (this.isRowIdPresent(result)) {
            generateUniqueKey();            
        }
        return result;
    }

    this.isRowIdPresent = function(result){
        var keysList = Object.keys(localStorage);
        for (let index = 0; index < keysList.length; index++) {
            const element = keysList[index];
            if (element == result) {
                return true;
            }
            return false;
        }
    }

    this.getLocalStorageData = function(){
        var data = [];
        var keysList = Object.keys(localStorage);

        for (let index = 0; index < keysList.length; index++) {
            const element = keysList[index];
            console.log("Product Id", element);
            data.push(localStorage.getItem(element));
        }
        console.log('Local storage data : ', data);
        return data;
    }

    this.getProductDetailsById = function(prodId){
        var keysList = Object.keys(localStorage);
        for (let index = 0; index < keysList.length; index++) {
            const element = keysList[index];
            var product = JSON.parse(localStorage.getItem(element));
            if (product.id === prodId) {
                console.log("Product Details : " + JSON.stringify(product));
                return product;
            }
        }
        return "";
    }


}